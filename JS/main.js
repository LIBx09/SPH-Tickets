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
const displayContainer = document.getElementById("display-container");
const ticketPriceStr = document.getElementById("ticket-price").innerText;
const ticketPrice = parseFloat(ticketPriceStr);
let totalTicketPrice = 0;
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
            
            // Create new elements to display the selected seat and ticket price
            const p = document.createElement("p");
            const c = document.createElement("c");
            const p2 = document.createElement("p2");
            p.innerText = seatSelect.innerText;
            c.innerText = "Economy";
            p2.innerText = ticketPrice.toString(); // Use ticketPrice directly instead of ticketPrice.innerText
            displayContainer.appendChild(p); // Append the paragraph to the display container
            displayContainer.appendChild(c);
            displayContainer.appendChild(p2);

            // Calculate total price and display
            totalTicketPrice += ticketPrice;
            document.getElementById("total-price").innerText = totalTicketPrice;

        } else {
            seatSelect.classList.remove('selected'); // Deselect the seat
            ticketsPurchased -= 1; // Decrement the number of tickets selected
            seatCount += 1; // Increment the seat count
            seatLeft.innerText = seatCount.toString(); // Update the seat count display

            // Calculate total price and display
            totalTicketPrice -= ticketPrice;
            document.getElementById("total-price").innerText = totalTicketPrice;
        }

        //give discount
    });
}

const seatPlus = document.querySelectorAll('.cursor-pointer');
let plusCounts = 0; // Variable to store the total count of clicks

for (const plus of seatPlus) {
    plus.addEventListener('click', function() {
        if (plusCounts >= 40 || plusCounts >= 4) {
            return; // Stop further execution if the count reaches 40
        }
        plusCounts += 1;
        document.getElementById('seat-plus').innerText = plusCounts;
    });
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){

    const couponElement = document.getElementById('input-field').value;
    console.log(couponElement);
    
    if (totalTicketPrice >= 2000) {
        if (couponElement === 'NEW15' || couponElement === 'Couple 20') {
            const grandTotal = document.getElementById("grand-total");
            const discountAmount = totalTicketPrice * 0.15;
            const remainingAmount = totalTicketPrice - discountAmount;
            grandTotal.innerText = remainingAmount; // Show remaining amount after discount

            // Display the discount amount
            const discountDisplay = document.getElementById("discount-amount");
            discountDisplay.innerText = discountAmount;
        } else {
            alert('Invalid Coupon Code');
        }
    } else {
        alert('aro khoroch koren vai');
    }
});





