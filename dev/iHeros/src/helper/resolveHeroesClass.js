const resolveHeroesClass = dangerLevel => {
  const classesHeroesPriority = [
    {
      class: "S",
      prioridade: "God"
    },

    {
      class: "A",
      prioridade: "Dragon"
    },

    {
      class: "B",
      prioridade: "Wolf"
    },

    {
      class: "C",
      prioridade: "Tiger"
    }
  ];

  const priority = classesHeroesPriority.filter(item => {
    return item.prioridade === dangerLevel;
  });

  return priority[0].class;
};

export default resolveHeroesClass;
