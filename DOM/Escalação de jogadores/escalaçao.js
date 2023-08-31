function add() {
  const jogadores = document.getElementById("jogadores");
  var nome = document.getElementById("nome").value;
  var posiçao = document.getElementById("posiçao").value;
  var numero = document.getElementById("numero").value;

  var confirma = confirm(
    "Deseja escalar " + nome + ", " + posiçao + ", numero " + numero + "?"
  );

  if (confirma) {
    var item = document.createElement("li");
    item.id = "camisa-" + numero;
    item.innerText = posiçao + ": " + nome + ", camisa: " + numero;

    jogadores.appendChild(item);
  }

  document.getElementById("nome").value = "";
  document.getElementById("posiçao").value = "";
  document.getElementById("numero").value = "";
}

function remover() {
  var removido = document.getElementById("removido").value;
  removido = "camisa-" + removido;
  var removido2 = document.getElementById(removido);

  document.getElementById("jogadores").removeChild(removido2);

  document.getElementById("removido").value = "";
}
