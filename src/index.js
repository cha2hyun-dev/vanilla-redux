const add = document.getElementById("add");
const minus = document.getElementById("minus");
const clear = document.getElementById("clear");

const number = document.querySelector("span");
let count = 0;

const updateText = () => {
    number.innerText = count;
};

const handleAdd = () => {
    console.log("add");
    count = count + 1;
    updateText();
};

const handleMinus = () => {
    console.log("minus");
    count = count - 1;
    updateText();
};

const handleClear = () => {
    console.log("clear");
    count = 0;
    updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
clear.addEventListener("click", handleClear);
