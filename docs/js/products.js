function add_event_listner() {
    document.querySelectorAll('#catalogo .products-container .product-card').forEach(
        (element) => {
            element.addEventListener('click', () => open_page(element))
        }
    )
}

function open_page(element) {
    // window.location.href = '../docs/pages/produtct_page.html'
    window.location.href = './pages/produtct_page.html'
}

function back_menu(){
    window.location.href = '../index.html'
}

add_event_listner()