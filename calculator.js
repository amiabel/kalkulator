
let buttons = document.querySelectorAll('button')
let display = document.querySelector('#display')
let displayValues = ''

buttons.forEach(button => button.onclick = function (event) {
    if (event.target.dataset.value) {
        displayValues += event.target.dataset.value
    }

    if (event.target.dataset.action) {
        switch (event.target.dataset.action) {
            case 'calculate':
                displayValues = eval(displayValues)
                updateDisplay()
                break
            case 'clear':
                displayValues = ''
                break
        }
    }

    updateDisplay()
})

function updateDisplay() {
    display.textContent = displayValues
}