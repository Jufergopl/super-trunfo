const cartas = [
  { nome: "Dragão", forca: 90, magia: 70, defesa: 80 },
  { nome: "Guerreiro", forca: 80, magia: 30, defesa: 60 },
  { nome: "Mago", forca: 50, magia: 95, defesa: 40 }
];

function jogar() {
  const carta1 = cartas[Math.floor(Math.random() * cartas.length)];
  const carta2 = cartas[Math.floor(Math.random() * cartas.length)];
  const atributo = "forca"; // fixo para simplificação

  const resultado = carta1[atributo] > carta2[atributo]
    ? "Você venceu!"
    : carta1[atributo] < carta2[atributo]
    ? "Você perdeu!" : "Empate!";

  document.getElementById("carta-jogador").innerHTML = `
    Sua carta: <strong>${carta1.nome}</strong> - ${atributo}: ${carta1[atributo]}<br>
    Oponente: <strong>${carta2.nome}</strong> - ${atributo}: ${carta2[atributo]}
  `;

  document.getElementById("resultado").innerText = resultado;
}
