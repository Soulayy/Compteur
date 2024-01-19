let counts = setInterval(updated);
let upto = 0;
function updated() {
        let count = document.getElementById("counter1");
        count.innerHTML = (upto += 30000);
        if (upto === 4500000) {
        clearInterval(counts);
    }
}

let counts1 = setInterval(updated1);
let upto1 = 0;
function updated1() {
        let count1 = document.getElementById("counter2");
        count1.innerHTML = (upto1 += 20000);
        if (upto1 === 3000000) {
        clearInterval(counts1);
    }
}

let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2() {
        let count2 = document.getElementById("counter3");
        count2.innerHTML = (upto2 += 10000);
        if (upto2 === 2000000) {
        clearInterval(counts2);
    }
}