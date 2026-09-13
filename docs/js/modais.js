function swap_modal(modal_id = '') {
    document.querySelectorAll('#modais .modal').forEach(
        (modal) => {
            modal.classList.remove('active')
        }
    )
    document.getElementById('modais').classList.toggle('active')
    if (modal_id == '') {
        return
    }
    document.getElementById(modal_id).classList.toggle('active')
}