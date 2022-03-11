const geradorDeEmpregos = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_')
    return { nomeCompleto, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), 
        id2: callback('Luiza Drumond'), 
        id3: callback('Carla Paiva'),
    }
    return employees;
};
console.log(newEmployees(geradorDeEmpregos));

const numeroSorteado = (meuNumero, numero) => meuNumero === numero;

const lotteryResult = (meuNumero, callback) => {
    const numero = Math.floor((Math.random() * 5) + 1);

    return callback(meuNumero, numero) ? 'Parabéns você ganhou' : 'Tente novamente'
}
console.log(lotteryResult(3, numeroSorteado));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const comparadorDeResposta = (respostaCerta, respostaDoEstudante) => {
    if (respostaCerta === respostaDoEstudante) {
      return 1;
    } if (respostaDoEstudante === 'N.A') {
      return 0;
    }
    return -0.5;
  };
  
  const countPoints = (respostaCertas, respostaDoEstudantes, action) => {
    let contador = 0;
    for (let index = 0; index < respostaCertas.length; index += 1) {
      const actionReturn = action(respostaCertas[index], respostaDoEstudantes[index]);
      contador += actionReturn;
    }
    return `Resultado final: ${contador} pontos`;
  };
  
  console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, comparadorDeResposta));