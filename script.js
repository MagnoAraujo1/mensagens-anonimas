function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function enviarMensagem() {
  const mensagem = document.getElementById("mensagem").value;
  const usuario = getQueryParam("user") || "desconhecido";

  if (!mensagem.trim()) {
    alert("Por favor, digite uma mensagem.");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbztV2MDiCYCXJbbaiOyZgI59lnVK7axDmA3uit8hdv_fNmE2i3UpSx-7tyWBoZXUr6SqA/exec", {
    method: "POST",
    body: JSON.stringify({
      user: usuario,
      message: mensagem
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.text())
  .then(data => {
    alert("Mensagem enviada com sucesso!");
    document.getElementById("mensagem").value = "";
  })
  .catch(error => {
    alert("Erro ao enviar mensagem.");
    console.error(error);
  });
}
