// Função que calcula a média válida
function calcularMedia(atletas) {
    // Iterando sobre cada atleta
    for (let i = 0; i < atletas.length; i++) {
      let atleta = atletas[i];
      let notas = atleta.notas;
  
      // Ordenando as notas em ordem crescente
      notas.sort((a, b) => a - b);
  
      // Removendo a maior e a menor nota (primeira e última)
      let notasValidas = notas.slice(1, 4);
  
      // Calculando a média das 3 notas válidas
      let soma = 0;
      notasValidas.forEach(nota => soma += nota);
      let media = soma / notasValidas.length;
  
      // Exibindo o resultado no console
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${notas.join(', ')}`);
      console.log(`Média Válida: ${media}`);
      console.log('');  // Linha em branco entre os atletas
    }
  }
  
  // Dados de entrada
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Chamando a função para calcular a média e exibir os resultados
  calcularMedia(atletas);
  