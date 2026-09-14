function swap_modal(modal_id = '') {
    const modais = document.getElementById('modais')
    const modal = modal_id ? document.getElementById(modal_id) : null

    document.querySelectorAll('#modais .modal').forEach(modal => {
        modal.classList.remove('active')
    })

    if (modal) {
        modais.classList.add('active')
        modal.classList.add('active')
    } else {
        modais.classList.remove('active')
    }
}