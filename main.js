const submit = document.getElementById('submit');
const reaction = document.getElementById('reaction');
const maincard = document.getElementById('main-card');
const input = document.querySelectorAll('input');
const msg = document.getElementById('msg');
let x;

input.forEach(e => e.addEventListener('click', () =>
    x = e.value
));

submit.addEventListener('click', react);

function react() {
    reaction.setAttribute('aria-hidden', 'false');
    maincard.setAttribute('aria-hidden', 'true');

    switch (x) {
        case "1":
            msg.innerText = "You selected 1 out of 5";
            break;
        case "2":
            msg.innerText = "You selected 2 out of 5";
            break;
        case "3":
            msg.innerText = "You selected 3 out of 5";
            break;
        case "4":
            msg.innerText = "You selected 4 out of 5";
            break;
        case "5":
            msg.innerText = "You selected 5 out of 5";
            break;
            case " ":
                msg.innerText = "You selected none";
                break;
    }
    
}