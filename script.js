let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.btn');

let string = '';
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            input.value = string;
        } else if (e.target.innerHTML === 'C') {
            string = '';
            input.value = string;
        } else if (e.target.innerHTML === 'Del') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
