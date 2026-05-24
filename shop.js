const shopItems = [
  { id: 1, image: "assetss/Product.01.png", name: "VOID Sculpted Mirror", description: "Een luxe handspiegel.", price: 29, link: "sculptedmirror.html" },
  { id: 2, image: "assetss/Product.02.png", name: "VOID Eye Palette", description: "Vier matte aardetinten.", price: 34, link: "eyepalette.html" },
  { id: 3, image: "assetss/Product.03.png", name: "VOID Fluid Foundation", description: "Gewichtloze foundation.", price: 42, link: "fluidfoundation.html" },
  { id: 4, image: "assetss/Product.04.png", name: "VOID Velvet Blush", description: "Compacte poederblush.", price: 26, link: "velvetblush.html" },
  { id: 5, image: "assetss/Product.05.png", name: "VOID Contour Stick", description: "Blendbare contourstick.", price: 22, link: "contourstick.html" },
  { id: 6, image: "assetss/Product.06.png", name: "VOID Concealer", description: "Rijke concealer.", price: 31, link: "concealer.html" },
  { id: 7, image: "assetss/Product.07.png", name: "VOID Lip Veil", description: "Stralende lipgloss.", price: 19, link: "lipveil.html" },
];

const shopSection = document.querySelector("#shop");
if (shopSection) {
  shopItems.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("shop-item");
    article.innerHTML = `
      <a href="${item.link}"><img src="${item.image}" alt="${item.name}" /></a>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>€${item.price}</p>
      <button class="btn-cart" data-id="${item.id}">Winkelmandje</button>
      <button class="btn-wishlist" data-id="${item.id}">♡ Wishlist</button>
    `;
    shopSection.appendChild(article);
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-cart")) {
    const id = parseInt(e.target.dataset.id);
    const item = shopItems.find((i) => i.id === id);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((i) => i.id === id);
    if (existing) { existing.quantity += 1; } else { cart.push({ ...item, quantity: 1 }); }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} toegevoegd!`);
  }
  if (e.target.classList.contains("btn-wishlist")) {
    const id = parseInt(e.target.dataset.id);
    const item = shopItems.find((i) => i.id === id);
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.find((i) => i.id === id)) {
      wishlist.push(item);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    alert(`${item.name} in wishlist!`);
  }
});
