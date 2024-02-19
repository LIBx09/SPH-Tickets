function changeWal() {
    hideElementById('sbh-ticket');
    showElementById('sbh-paribahan');
}
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');//
}///////////////////////////

function secondWindow(){
    hideElementById('sbh-ticket')
    hideElementById('sbh-paribahan')
    hideElementById('footer')
    showElementById('success')
}
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}







const seatSelects = document.querySelectorAll(".seatSelector p");
const seatLeft = document.getElementById('seats-left');
const displayContainer = document.getElementById("display-container");
const ticketPriceStr = document.getElementById("ticket-price").innerText;
const ticketPrice = parseFloat(ticketPriceStr);
let totalTicketPrice = 0;
let seatCount = parseInt(seatLeft.innerText);
let ticketsPurchased = 0;

for (let index = 0; index < seatSelects.length; index++) {
    const seatSelect = seatSelects[index];
    seatSelect.addEventListener('click', function() {
        if (ticketsPurchased >= 4 || seatCount <= 0 || seatSelect.classList.contains('selected')) {
            return; 
        }

        seatSelect.style.backgroundColor = seatSelect.style.backgroundColor === 'green' ? '' : 'green';
        seatSelect.style.color = seatSelect.style.color === 'white' ? '' : 'white';
        
        if (!seatSelect.classList.contains('selected')) {
            seatSelect.classList.add('selected'); 
            ticketsPurchased++; 
            seatCount -= 1; 
            seatLeft.innerText = seatCount.toString(); 
            
            const p = document.createElement("p");
            const c = document.createElement("c");
            const p2 = document.createElement("p2");
            p.innerText = seatSelect.innerText;
            c.innerText = "Economy";
            p2.innerText = ticketPrice.toString(); 
            displayContainer.appendChild(p);
            displayContainer.appendChild(c);
            displayContainer.appendChild(p2);


            totalTicketPrice += ticketPrice;
            document.getElementById("total-price").innerText = totalTicketPrice;

        } else {
            seatSelect.classList.remove('selected'); 
            ticketsPurchased -= 1; 
            seatCount += 1;
            seatLeft.innerText = seatCount.toString();

            totalTicketPrice -= ticketPrice;
            document.getElementById("total-price").innerText = totalTicketPrice;
        }


    });
}

const seatPlus = document.querySelectorAll('.cursor-pointer');
let plusCounts = 0;

for (const plus of seatPlus) {
    plus.addEventListener('click', function() {
        if (plusCounts >= 40 || plusCounts >= 4) {
            return; 
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
            grandTotal.innerText = remainingAmount;

            
            const discountDisplay = document.getElementById("discount-amount");
            discountDisplay.innerText = discountAmount;
        } else {
            alert('Invalid Coupon Code');
        }
    } else {
        alert('aro khoroch koren vai');
    }
});

const yourPhoneInput = document.getElementById("phone-number");
const applyButton = document.getElementById("next-btn");

yourPhoneInput.addEventListener("input", function(event) {
    if (event.currentTarget.value === "") {
        applyButton.disabled = true;
    } else {
        applyButton.disabled = false;
    }
});

