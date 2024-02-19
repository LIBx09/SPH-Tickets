const seatSelects = document.querySelectorAll(".seatSelector p");
const seatLeft = document.getElementById('seats-left');
const displayContainer = document.getElementById("display-container");
const ticketPriceStr = document.getElementById("ticket-price").innerText;
const ticketPrice = parseFloat(ticketPriceStr);
let seatCount = parseInt(seatLeft.innerText); // Parse the initial seat count
let ticketsPurchased = 0; // Track the number of tickets purchased

for (let index = 0; index < seatSelects.length; index++) {
    const seatSelect = seatSelects[index];
    seatSelect.addEventListener('click', function() {
        if (ticketsPurchased >= 4 || seatCount <= 0 || seatSelect.classList.contains('selected')) {
            return; // Stop further execution if the ticket limit is reached or no more seats are available
        }

        seatSelect.style.backgroundColor = seatSelect.style.backgroundColor === 'green' ? '' : 'green';
        seatSelect.style.color = seatSelect.style.color === 'white' ? '' : 'white';
        
        if (!seatSelect.classList.contains('selected')) {
            seatSelect.classList.add('selected'); // Mark the seat as selected
            ticketsPurchased++; // Increment the number of tickets selected
            seatCount -= 1; // Decrement the seat count
            seatLeft.innerText = seatCount.toString(); // Update the seat count display
            
            // Create a container to hold seat information
            const container = document.createElement("div");
            container.classList.add("seat-info-container");

            // Create elements for seat information
            const p = document.createElement("p");
            const c = document.createElement("c");
            const p2 = document.createElement("p2");
            p.innerText = seatSelect.innerText;
            c.innerText = "Economy";
            p2.innerText = ticketPrice.toString(); // Use ticketPrice directly instead of ticketPrice.innerText

            // Append elements to the container
            container.appendChild(p);
            container.appendChild(c);
            container.appendChild(p2);

            // Append container to the display container
            displayContainer.appendChild(container);
        }
    });
}
