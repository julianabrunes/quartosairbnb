const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsContainer = document.querySelector("#cards");
let data = [];

async function fetchCards() {
    const response = await fetch(apiUrl)
    return await response.json()
};

function renderCards(cards) {
    cardsContainer.innerHTML = "";
    cards.map(renderCard);
};

function renderCard(card) {
    const div = document.createElement("div");

    div.className = "carditem";

    div.innerHTML = `
    <img 
        src="${card.photo}" 
        alt="${card.name}" 
        class="carditem--image"
    />

    <div class="carddescription">
        <div class="carddescription--type">
        ${card.property_type}
        </div>

       <h1 class="carddescription--name">${card.name}</h1>
       
       <h3 class="carddescription--price">R$ ${card.price},00</h3>
   </div>
   `;
    cardsContainer.appendChild(div);

};

async function main() {
    data = await fetchCards();
    if (data) {
        renderCards(data);
    }
};

main();