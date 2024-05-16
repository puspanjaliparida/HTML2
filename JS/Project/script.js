let c = 0;
let cvalue = document.getElementById('count');
let evenOdd = document.getElementById('evenodd');

function updateEvenOdd() {
    if (c !== 0) {
        evenOdd.textContent = c % 2 === 0 ? "Even" : "Odd";
    } else {
        evenOdd.textContent = "";
    }
}
function incr() {
    c++;
    cvalue.textContent = c;
    updateEvenOdd();
}

function decr() {
    c--;
    cvalue.textContent = c;
    updateEvenOdd();
}

function reset() {
    c = 0;
    cvalue.textContent = c;
    evenOdd.textContent = ""; // Clear even/odd display
}
