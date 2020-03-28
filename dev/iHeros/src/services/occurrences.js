import '../database'
import socket from './socket'
import haversine from 'haversine'

import resolveHeroesClass from '../helper/resolveHeroesClass'

import HeroModel from '../app/models/hero'
import OccurrenceModel from '../app/models/occurrence'

socket.on('connect', () => {
  console.log('Successful connection')
})

socket.on('occurrence', async data => {
  //Array para armazenar os calculos de distância
  let arrLocationCalculated = []

  //Realiza busca dos heróis,  filtrando pela classe
  const heroes = await HeroModel.find({
    class: resolveHeroesClass(data.dangerLevel)
  })

  //Criar o Obj com lat e lng pra calcular a distância da ocorrência
  const localOccurrence = {
    latitude: data.location[0].lat,
    longitude: data.location[0].lng
  }

  //Verifica se houver retorno de herói
  if (!heroes.length) {
    console.log('No momento não temos herói para essa ocorrência')
    return
  }

  //Calcula a distância de todos os heróis retornados com a distância da ocorrência
  const calculateDistance = heroes.map(hero => {
    const heroLocation = {
      latitude: hero.latitude,
      longitude: hero.longitude
    }
    arrLocationCalculated.push(
      haversine(localOccurrence, heroLocation, {
        unit: 'mile'
      })
    )

    return {
      monsterName: data.monsterName,
      dangerLevel: data.dangerLevel,
      latitude: localOccurrence.latitude,
      longitude: localOccurrence.longitude,
      heroes: hero.name,
      distance: haversine(localOccurrence, heroLocation, {
        unit: 'mile'
      })
    }
  })

  console.log(arrLocationCalculated)
  //Retorna a menor distâcia do herói entre a ocorrência
  const menorDistancia = Math.min(...arrLocationCalculated)

  //Filtra e retorna o herói baseado na distância
  const chooseHero = calculateDistance.filter(hero => {
    return hero.distance === menorDistancia
  })

  //Salva a ocorrência e o herói que resolvel
  await OccurrenceModel.create(chooseHero)
  console.log('Ocorrência salva com sucesso')

  //Limpa o Array para a proxíma ocorrência
  arrLocationCalculated = []
})
