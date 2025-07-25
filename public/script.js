// Cria a div
const novaDiv = document.createElement("div");
novaDiv.textContent = "Essa div foi criada via JS da CDN da Vercel!";
novaDiv.style.backgroundColor = "#f0f0f0";
novaDiv.style.padding = "10px";
novaDiv.style.border = "1px solid #ccc";
novaDiv.style.margin = "20px";

// Adiciona ao body
document.body.appendChild(novaDiv);
