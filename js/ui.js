function selecionar_item(item) {
    var options = item.parentNode
    var selector = item.parentNode.parentNode
    var input = selector.querySelector(':scope > input')
    var text = selector.querySelector('.box > span')
    input.value = item.innerHTML
    text.innerHTML = item.innerHTML
    options.querySelectorAll('.options-item').forEach(
        (option) => {
            option.classList.remove('selected')
        }
        )
        item.classList.add('selected')
}


function checkBoxInput(checkbox) {
    var input = checkbox.querySelector(':scope > input')
    input.value = input.value == 'true' ? 'false' : 'true'
}



function qnt_button_pressed(button, add) {
    var button = button.parentNode
    var input = button.querySelector(':scope > input')

    var value = Number(input.value) + (add ? 1 : -1)
    if (value >= 1) {
        input.value = value
    }
    button.querySelector('.value').innerHTML = input.value
}