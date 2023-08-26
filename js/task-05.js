// 
let input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");

const onInput = event => {
    if (input.value.length === 0) {
        span.textContent = "Anonymous";
    } else {
        span.textContent = event.currentTarget.value;
    }
};

input.addEventListener("input", onInput);