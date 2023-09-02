const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("resultInput");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

// habilitando os botões
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});
//

//botão clear
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus(); // move o cursor para o input
});
//

//botão equal
document.getElementById("equal").addEventListener("click", calculate);
//

// limitando a digitaçaõ do usuário par ao necessário | ev.key = tecla digitada
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1); //corta o ultimo elemento
  }
  if (ev.key === "Enter") {
    calculate();
  }
});
//

// função para calcular as operações
function calculate() {
  resultInput.value = "Erro";
  resultInput.classList.add("error");

  const result = eval(input.value); //executa codigos js. Cuidado ao utilizar

  resultInput.value = result;
  resultInput.classList.remove("error");
}
//

// copiar resultado
document.getElementById("copy").addEventListener("click", function (ev) {
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
});

// Alteração de tema
document.getElementById("Switcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--primary-color", "#a50bd3");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--primary-color", "#a50bd3");
    main.dataset.theme = "dark";
  }
});
//
