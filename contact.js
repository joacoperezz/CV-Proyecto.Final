const formContainer = document.createElement("div");
formContainer.style.display = "flex";
formContainer.style.flexWrap = "wrap";
formContainer.style.justifyContent = "center";

const form = document.createElement("form");
form.style.backgroundColor = "#ddd";
form.style.width = "500px";
form.style.padding = "20px";
form.style.boxShadow = "2px 2px 2px #999";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Nombre y Apellido";
nameInput.style.width = "95%";
nameInput.style.margin = "10px 0";
nameInput.style.padding = "10px";
nameInput.style.fontSize = "16px";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";
emailInput.style.width = "95%";
emailInput.style.margin = "10px 0";
emailInput.style.padding = "10px";
emailInput.style.fontSize = "16px";

const phoneInput = document.createElement("input");
phoneInput.type = "tel";
phoneInput.placeholder = "Numero de telefono";
phoneInput.style.width = "95%";
phoneInput.style.margin = "10px 0";
phoneInput.style.padding = "10px";
phoneInput.style.fontSize = "16px";

const submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Enviar";
submitBtn.style.width = "100%";
submitBtn.style.margin = "25px 0";
submitBtn.style.padding = "15px";
submitBtn.style.fontSize = "18px";
submitBtn.style.backgroundColor = "blue";
submitBtn.style.color = "white";
submitBtn.style.border = "none";
submitBtn.style.cursor = "pointer";

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(phoneInput);
form.appendChild(submitBtn);
formContainer.appendChild(form);

document.body.appendChild(formContainer);
