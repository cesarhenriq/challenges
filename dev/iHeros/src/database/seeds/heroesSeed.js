import '../../database'
import HeroModel from '../../app/models/hero'

const heroes = [
  {
    name: 'Homem de Ferro',
    class: 'S',
    latitude: 22.35146,
    longitude: -105.19274
  },
  {
    name: 'Batman',
    class: 'A',
    latitude: -34.30269,
    longitude: 26.3027
  },

  {
    name: 'Super Man',
    class: 'B',
    latitude: 40.02075,
    longitude: -101.22947
  },
  {
    name: 'Fera',
    class: 'C',
    latitude: 40.40002,
    longitude: 150.60975
  },

  {
    name: 'Homem-Aranha',
    class: 'S',
    latitude: 12.0241,
    longitude: -127.40254
  },

  {
    name: 'Wolverine',
    class: 'A',
    latitude: 15.31226,
    longitude: -120.86437
  },

  {
    name: 'Flash',
    class: 'B',
    latitude: -29.07166,
    longitude: 109.72644
  },

  {
    name: 'Incrível Hulk',
    class: 'C',
    latitude: 2.71597,
    longitude: -120.11475
  },

  {
    name: 'Thor',
    class: 'S',
    latitude: 6.86181,
    longitude: 7.03565
  },

  {
    name: 'Lanterna Verde',
    class: 'A',
    latitude: 8.10044,
    longitude: -78.11301
  },

  {
    name: 'Mulher Maravilha',
    class: 'B',
    latitude: 0.05839,
    longitude: 52.50227
  },

  {
    name: 'Justiceiro',
    class: 'C',
    latitude: 74.93033,
    longitude: -158.13763
  },

  {
    name: 'Blade',
    class: 'S',
    latitude: -11.74752,
    longitude: 125.60038
  },

  {
    name: 'Capitão América',
    class: 'A',
    latitude: -13.86048,
    longitude: -95.59531
  },

  {
    name: 'Demolidor',
    class: 'B',
    latitude: -16.12375,
    longitude: 118.29114
  },

  {
    name: 'Homem Formiga',
    class: 'C',
    latitude: 50.33056,
    longitude: -112.04164
  }
]

const createHeroes = async () => {
  try {
    for (let hero of heroes) {
      await HeroModel.create(hero)
    }
    console.log('Heróis criado com sucesso')
  } catch (error) {
    console.error(error)
  }
}

createHeroes()
