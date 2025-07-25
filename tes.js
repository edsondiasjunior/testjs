var wrapper = document.createElement("div");
wrapper.classList.add("rb-example__panel");

var customBlock = document.createElement("div");
customBlock.classList.add("rb-example__card");
customBlock.innerHTML = `
  <h3>🚀 Zerando o Treino</h3>
  <p>
    Essa é sua chance de sair da tela e entrar no jogo!
    <strong>Escolha o treino</strong> do Endrick, da Letícia Bufoni ou do Ítalo Ferreira,
    ative o filtro no TikTok e dê o seu máximo em 30 segundos.
  </p>
  <p>
    Quem dominar o desafio vai treinar com um atleta Red Bull
    em uma experiência inesquecível.
  </p>
`;

wrapper.appendChild(customBlock);

export const start = async ({ el }) => {
  el.appendChild(wrapper);
};

export const attach = () => {};
