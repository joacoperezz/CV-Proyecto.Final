let currentStyle = "claro";

function switchStyles() {
  if (currentStyle === "claro") {
    document.querySelector("link").setAttribute("href", "oscuro.css");
    currentStyle = "oscuro";
  } else {
    document.querySelector("link").setAttribute("href", "claro.css");
    currentStyle = "claro";
  }
}

window.onload = function() {
  let switchButton = document.createElement("button");
  switchButton.innerHTML = "Cambiar estilo";
  switchButton.onclick = switchStyles;
  document.querySelector(".section.contact").appendChild(switchButton);
};
