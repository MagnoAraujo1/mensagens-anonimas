function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function enviarMensagem() {
  const mensagem = document.getElementById("mensagem").value;
  const usuario = getQueryParam("user") || "desconhecido";

  console.log("Mensagem:", mensagem);
  console.log("Enviado por:", usuario);

  alert("Mensagem enviada com sucesso!");
}
