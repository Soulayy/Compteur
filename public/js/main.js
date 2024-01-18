let counts = setInterval(updated);
let upto = 0;
function updated() {
        let count = document.getElementById("counter");
        count.innerHTML = (upto += 100);
        if (upto === 35400) {
        clearInterval(counts);
    }
}

let counts1 = setInterval(updated1);
let upto1 = 0;
function updated1() {
        let count1 = document.getElementById("counter1");
        count1.innerHTML = (upto1 += 100);
        if (upto1 === 5000) {
        clearInterval(counts1);
    }
}

let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2() {
        let count2 = document.getElementById("counter2");
        count2.innerHTML = (upto2 += 10);
        if (upto2 === 470) {
        clearInterval(counts2);
    }
}