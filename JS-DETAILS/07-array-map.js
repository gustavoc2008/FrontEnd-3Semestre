const hobbies = [
  "Play Basketbaal",   // 0
  "Play Video Game",  // 1
  "To Hear Music",   // 2
  "Produce Music",    // 3
  "Watch Anime"      // 4
]

// Array Map e um metodo da classe array que intera sobre o array retornando um novo array,
// compondo um novo resultado para cada indice antigo, veja:

const novoHobby = hobbies.map((hobby) => {
  return `<p> ${hobby} </p>`;
});

console.log(novoHobby);


