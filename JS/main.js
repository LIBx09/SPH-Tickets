// function changeWal() {
//     hideElementById('sbh-ticket');
//     showElementById('sbh-paribahan');
    
// }
// function hideElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }
// function showElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('hidden');
// }




const seatSelects = document.querySelectorAll(".seatSelector p");
const seatLeft = document.getElementById('seats-left');
const displayAmount = document.getElementById('display-amount'); // Get the element to display the selected button and ticket price
let seatCount = parseInt(seatLeft.innerText); // Parse the initial seat count
let ticketsPurchased = 0; // Track the number of tickets purchased

for (let index = 0; index < seatSelects.length; index++) {
    const seatSelect = seatSelects[index];
    let buttonClicked = false;
    seatSelect.addEventListener('click', function() {
        if (ticketsPurchased >= 4 || seatCount <= 0) {
            return; // Stop further execution if the ticket limit is reached or no more seats are available
        }

        seatSelect.style.backgroundColor = seatSelect.style.backgroundColor === 'green' ? '' : 'green';
        seatSelect.style.color = seatSelect.style.color === 'white' ? '' : 'white';
        
        if (!seatSelect.classList.contains('selected')) {
            seatSelect.classList.add('selected'); // Mark the seat as selected
            ticketsPurchased++; // Increment the number of tickets selected
            seatCount -= 1; // Decrement the seat count
            seatLeft.innerText = seatCount.toString(); // Update the seat count display
        } else {
            seatSelect.classList.remove('selected'); // Deselect the seat
            ticketsPurchased -= 1; // Decrement the number of tickets selected
            seatCount += 1; // Increment the seat count
            seatLeft.innerText = seatCount.toString(); // Update the seat count display
        }

        // Retrieve the ticket price from the HTML document
        const ticketPrice = parseFloat(document.getElementById('ticket-price').innerText);

        // Set the name of the button and the ticket price to the display-amount element
        displayAmount.innerText = `Selected Seat: ${seatSelect.id}, Ticket Price: ${ticketPrice}`;

        console.log("Tickets purchased: ", ticketsPurchased); // Display the number of tickets selected
    });
}

const seatPlus = document.querySelectorAll('.cursor-pointer');
let plusCounts = 0; // Variable to store the total count of clicks

for (const plus of seatPlus) {
    plus.addEventListener('click', function() {
        if (plusCounts >= 40) {
            return; // Stop further execution if the count reaches 40
        }
        plusCounts += 1;
        document.getElementById('seat-plus').innerText = plusCounts;
        console.log('boss click');
    });
}

