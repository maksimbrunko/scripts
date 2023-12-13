console.log("Loaded");

// variables

var moreprice = 100;
var stronger = 1;
var strongerdisplay = 0;
var autoprice = 50;
var Biscuits = 0;
var Autoclicker = 0;
let counter = 0;

//autoclicker

function StrongerClicker() {
    // Assuming Biscuits and moreprice are declared and initialized somewhere in your code
    if (Biscuits >= moreprice) {
        stronger++;
        Biscuits -= moreprice;
        console.log(moreprice);  // Fix: Use lowercase "moreprice" here
        moreprice = 100 * stronger;  // Move this line above the if condition
        UpdateDisplays();
    }
}


UpdateDisplays();
function AutoClicker() {
    UpdateDisplays();
    if (Biscuits >= autoprice) {
        Autoclicker++;
        Biscuits -= autoprice;
        console.log(Autoclicker);
        UpdateDisplays();

        if (Autoclicker >= 2) {
            autoprice = 100 * Autoclicker;
            UpdateDisplays();
        } else {
            autoprice = 50 * 2;
            UpdateDisplays();
        }
    }
}

const counterElement = document.getElementById('counter');

const intervalId = setInterval(() => {
    // Increment the variable every second
    counter++;
    Biscuits += Autoclicker;
    UpdateDisplays();

    // Update the HTML element to display the current value
    counterElement.textContent = counter;

    // Add a condition to stop the interval if needed
    // For example, stop after 10 seconds
    if (counter === 10) {
        counter = 0;
    }
}, 1000); // 1000 milliseconds = 1 second

//end

//css animations

const sbutton = document.getElementById('strongerbutton');
const button = document.getElementById('autobutton');
const line = document.getElementById('line');
const BigBiscuit = document.getElementById('BigBiscuit');

BigBiscuit.addEventListener('mouseover', () => {
    BigBiscuit.style.width = '12.5rem';
    BigBiscuit.style.left = 'calc(50% - 6.25rem)';
});

BigBiscuit.addEventListener('mouseout', () => {
    BigBiscuit.style.width = '12.0rem'; // Initial width
    BigBiscuit.style.left = 'calc(50% - 6rem)';

});

BigBiscuit.addEventListener('mousedown', () => {
    BigBiscuit.style.width = '11.5rem';
    BigBiscuit.style.left = 'calc(50% - 5.75rem)';


    setTimeout(function () {
        BigBiscuit.style.width = '12.0rem';
        BigBiscuit.style.left = 'calc(50% - 6rem)';

    },
        150)
});

sbutton.addEventListener('mouseover', () => {
    line.style.width = '150px'; // Adjust the width as needed
});

sbutton.addEventListener('mouseout', () => {
    line.style.width = '90px'; // Initial width
});

button.addEventListener('mouseover', () => {
    line.style.width = '150px'; // Adjust the width as needed
});

button.addEventListener('mouseout', () => {
    line.style.width = '90px'; // Initial width
});

//end

function UpdateDisplays() {
    strongerdisplay = stronger-1;
    document.getElementById("autocount").innerHTML = "Autoclickers: " + Autoclicker;
    document.getElementById("strongercount").innerHTML = "More Clicks: : " + "+" + strongerdisplay;
    document.getElementById("biscuitcount").innerHTML = "Biscuits: " + Biscuits;
    document.getElementById("autobutton").innerHTML = "Autoclicker x1: " + autoprice + " Biscuits";
    document.getElementById("strongerbutton").innerHTML = "More Clicks +1: " + moreprice + " Biscuits";
}

function add() {
    Biscuits += stronger;
    console.log(Biscuits);
    UpdateDisplays();
}























/*css junk

p {
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-top: 20px;
    margin-bottom: -20px;
    color: rgb(246, 246, 246);
    opacity: 0.3;
}

//end

*/