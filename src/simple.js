// this can be used with rgba and hex value ontop of pre defined colors.
const colors = ["green", "red", "yellow", "orange", "blue", "purple", "pink"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

//runs on click
btn.addEventListener('click', function()
{

    // get random number between 0 and 3
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//random number function that rounds down number
function getRandomNumber()
{
    return Math.floor(Math.random() * colors.length);
}
