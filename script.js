// قائمة الألعاب مع الصور والروابط
const games = [
  { name: "Game 1", category: "action", price: 5, image: "https://i.postimg.cc/JhzJn4Fj/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game56/" },
  { name: "Game 2", category: "adventure", price: 5, image: "https://i.postimg.cc/d1zT4RV9/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game65/" },
  { name: "Game 3", category: "puzzle", price: 5, image: "https://i.postimg.cc/9X79zkLg/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game12/" },
  { name: "Game 4", category: "action", price: 5, image: "https://i.postimg.cc/GtxhGv8t/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game11/" },
  { name: "Game 5", category: "adventure", price: 5, image: "https://i.postimg.cc/fRLTStwW/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game9/" },
  { name: "Game 6", category: "puzzle", price: 5, image: "https://i.postimg.cc/0NKkZTML/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game8/" },
  { name: "Game 7", category: "action", price: 5, image: "https://i.postimg.cc/DfP2Cd0y/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game54/" },
  { name: "Game 8", category: "adventure", price: 5, image: "https://i.postimg.cc/zfQ6RwJr/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game456/" },
  { name: "Game 9", category: "puzzle", price: 5, image: "https://i.postimg.cc/V6MGr3Gq/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game63/" },
  { name: "Game 10", category: "action", price: 5, image: "https://i.postimg.cc/Y0KPdpGD/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game765/" },
  { name: "Game 11", category: "adventure", price: 5, image: "https://i.postimg.cc/jS5MQW3d/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game576/" },
  { name: "Game 12", category: "puzzle", price: 5, image: "https://i.postimg.cc/0NKZFTqT/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game93/" },
  { name: "Game 13", category: "action", price: 5, image: "https://i.postimg.cc/3J0t89G3/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game48/" },
  { name: "Game 14", category: "adventure", price: 5, image: "https://i.postimg.cc/TPf0c64P/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game76/" },
  { name: "Game 15", category: "puzzle", price: 5, image: "https://i.postimg.cc/VsdxtqtV/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game47/" },
  { name: "Game 16", category: "action", price: 5, image: "https://i.postimg.cc/CxVX99Q3/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game46/" },
  { name: "Game 17", category: "adventure", price: 5, image: "https://i.postimg.cc/k5JZgK9w/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game45/" },
  { name: "Game 18", category: "puzzle", price: 5, image: "https://i.postimg.cc/GmJVRq0H/Screenshot-Chrome.jpg", link: "https://medo-debugr.github.io/game6/" },
];

const cart = [];
const triedGames = new Set();  // Set to track tried games

const gameContainer = document.getElementById("game-container");
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

// عرض الألعاب
function displayGames() {
  gameContainer.innerHTML = "";
  games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <button onclick="addToCart('${game.name}', ${game.price})">شراء ($${game.price})</button>
      <button onclick="playGame('${game.name}', '${game.link}')">لعب الآن</button>
    `;
    gameContainer.appendChild(gameCard);
  });
}

// إضافة اللعبة إلى السلة
function addToCart(name, price) {
  const gameInCart = cart.find((game) => game.name === name);
  if (!gameInCart) {
    cart.push({ name, price });
  }
  updateCart();
}

// تحديث السلة
function updateCart() {
  cartItems.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((game) => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${game.name} - $${game.price}`;
    cartItems.appendChild(cartItem);
    totalPrice += game.price;
  });
  totalPriceEl.textContent = `المجموع: $${totalPrice}`;
}

// تجربة اللعبة مرة واحدة
function playGame(name, link) {
  if (!triedGames.has(name)) {
    triedGames.add(name);
    window.open(link, "_blank");
  } else {
    alert("لقد جربت هذه اللعبة بالفعل.");
  }
}

// إتمام الشراء
function checkout() {
  if (cart.length === 0) {
    alert("لا توجد ألعاب في السلة.");
    return;
  }

  const phoneNumber = "01112345678"; // رقم الهاتف للتوجيه
  window.location.href = `https://www.fawry.com/checkout?phone=${phoneNumber}`;
}

// بحث الألعاب
function searchGames() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchInput)
  );
  gameContainer.innerHTML = "";
  filteredGames.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <button onclick="addToCart('${game.name}', ${game.price})">شراء ($${game.price})</button>
      <button onclick="playGame('${game.name}', '${game.link}')">لعب الآن</button>
    `;
    gameContainer.appendChild(gameCard);
  });
}

// استدعاء الدالة لعرض الألعاب عند تحميل الصفحة
displayGames();