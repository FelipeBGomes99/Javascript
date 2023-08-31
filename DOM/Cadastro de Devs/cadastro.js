// funções para criação de inputs e labels
function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

//
const form = document.getElementById("forms");
const experiencia = document.getElementById("experiencia");
let cont = 0;
experiencia.addEventListener("click", add);
let Devs = [];

function add(ev) {
  cont++;
  ev.preventDefault();

  // criando input de texto
  const ul = document.getElementById("preencher");
  const li = document.createElement("li");
  li.id = "li" + cont;
  li.className = "linha";
  const label = document.createElement("label");
  label.for = "tec";
  label.innerText = "Experiência: ";
  const input = document.createElement("input");
  input.type = "text";
  input.name = "tec";
  input.id = "tec" + cont;

  // criando inputs radio
  const labelRadio = createLabel("Tempo da experiência: ");

  const inputRadio1 = createInput(
    "inputRadio1" + cont,
    "0-2 anos",
    "InputRadio" + cont,
    "radio"
  );
  const labelRadio1 = createLabel("0-2 anos", "inputRadio1" + cont);

  const inputRadio2 = createInput(
    "inputRadio2" + cont,
    "2-4 anos",
    "InputRadio" + cont,
    "radio"
  );
  const labelRadio2 = createLabel("2-4 anos", "inputRadio2" + cont);

  const inputRadio3 = createInput(
    "inputRadio3" + cont,
    "5+ anos",
    "InputRadio" + cont,
    "radio"
  );
  const labelRadio3 = createLabel("5+ anos", "inputRadio3" + cont);

  //criando botão excluir

  const excluir = document.createElement("button");
  excluir.type = "button";
  excluir.innerText = "Excluir";
  excluir.addEventListener("click", function () {
    ul.removeChild(li);
  });

  li.append(
    input,
    label,
    labelRadio,
    inputRadio1,
    labelRadio1,
    inputRadio2,
    labelRadio2,
    inputRadio3,
    labelRadio3,
    excluir
  );
  ul.appendChild(li);

  console.log(form);
}

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const nomeCompleto = document.getElementById("nome");
  const linhasPreenchidas = document.querySelectorAll(".linha");

  let tecnologias = [];
  linhasPreenchidas.forEach(function (linhas) {
    const tecName = document.querySelector(
      "#" + linhas.id + " input[name='tec']"
    ).value;
    const tecExp = document.querySelector(
      "#" + linhas.id + " input[type='radio']:checked"
    ).value;

    tecnologias.push({ name: tecName, exp: tecExp });
    console.log(linhas);
  });

  const NovoDev = {
    nomeCompleto: nomeCompleto.value,
    tecnologias: tecnologias,
  };
  Devs.push(NovoDev);

  nomeCompleto.value = "";
  linhasPreenchidas.forEach(function (linhas) {
    linhas.remove();
  });

  console.log(Devs);
});

const nomeCompleto = document.getElementById("nome");
const linhasPreenchidas = document.querySelectorAll(".linha");

let tecnologias = [];
linhasPreenchidas.forEach(function (linhas) {
  const tecName = document.querySelector(
    "#" + linhas.id + " input[name='tec']"
  ).value;
  const tecExp = document.querySelector(
    "#" + linhas.id + " input[type='radio']:checked"
  ).value;

  tecnologias.push({ name: tecName, exp: tecExp });
  console.log(linhas);
});

const NovoDev = {
  nomeCompleto: nomeCompleto.value,
  tecnologias: tecnologias,
};
Devs.push(NovoDev);

nomeCompleto.value = "";
linhasPreenchidas.forEach(function (linhas) {
  linhas.remove();
});
