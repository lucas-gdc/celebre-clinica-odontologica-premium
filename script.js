const form = document.getElementById('formWhatsApp');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    const mensagem = `Olá, sou ${nome}. Gostaria de marcar uma avaliação na Celebre Clínica Odontológica. Meu telefone é ${telefone}.`;

    window.open(
      `https://wa.me/553821000898?text=${encodeURIComponent(mensagem)}`,
      '_blank',
      'noopener'
    );
  });
}
