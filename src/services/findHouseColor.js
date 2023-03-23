export default function findHouseColor(house) {
  const houseColors = {
    Gryffindor: {
      bgColor: 'var(--gryffindor-gold)',
      color: 'var(--gryffindor-red)',
    },
    Ravenclaw: {
      bgColor: 'var(--ravenclaw-blue)',
      color: 'var(--ravenclaw-bronze)',
    },
    Hufflepuff: {
      bgColor: 'var(--hufflepuff-yellow)',
      color: 'var(--hufflepuff-black)',
    },

    Slytherin: {
      bgColor: 'var(--slytherin-green)',
      color: 'var(--slytherin-silver)',
    },
  }
  return houseColors[house]
}
