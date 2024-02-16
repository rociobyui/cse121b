// Global variables
// To load the DOM
document.addEventListener("DOMContentLoaded", () => {
    // Variable to hold json link
    const jsonLink = "https://run.mocky.io/v3/f452e0a3-f472-4511-af87-a1aab77e5080";

    // Fetch data from JSON link
    fetch(jsonLink)
        .then(response => response.json())
        .then(data => startGame(data))
        .catch(error => console.error("Error fetching data:", error));
       
    
    //
    function startGame(data) {
        const cards = data.cards;

        // Shuffle the cards
        cards.sort(() => Math.random() - 0.5);

        const gameContainer = document.getElementById("game-container");
        let selectedCards = [];
        let matchedCards = [];

        // Create cards and add click event
        cards.forEach((card, index) => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.dataset.index = index;
            cardElement.textContent = card.cardName;

            // Create image element
            const imgElement = document.createElement("img");
            imgElement.src = card.imgUrl;
            imgElement.alt = card.id;

            //
            cardElement.appendChild(imgElement);
            
            cardElement.addEventListener("click", () => handleCardClick(cardElement));
            gameContainer.appendChild(cardElement);
        });

        function handleCardClick(cardElement) {
            //Preventing to click on matched or already selected cards.
            if (cardElement.classList.contains("matched") || cardElement.classList.contains("selected")) {
                return;    
            }

            cardElement.classList.toggle("selected");
            selectedCards.push({ index: cardElement.dataset. index, value: cardElement.textContent });
            console.log(selectedCards);
            if (selectedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }

        function checkMatch() {
            const [card1, card2] = selectedCards;

            if (card1.value === card2.value) {
                cardMatch(card1.index, card2.index);
            } else {
                hideCards(card1.index, card2.index);
            }
            // Populate array
            selectedCards = [];
            
            
        }
        
        // Checking for all the game card matches.
        function cardMatch(index1, index2) {
            const cardElements = document.querySelectorAll(".selected");
            cardElements.forEach(card => card. classList.add("matched"));
            matchedCards.push(index1, index2);
           
            if (matchedCards.length === cards.length) {
                alert("You did it!");
        
            }        
        }

        // Hiding not matching cards (set timeout).
        function hideCards(index1, index2) {
            const cardElements = document.querySelectorAll(".selected");
            cardElements.forEach(card => card.classList.remove("selected"));

            setTimeout(() => {
                cardElements.forEach(card => card.classList.remove("selected"));
            }, 500);
        }
    }
});