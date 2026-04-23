function handleAddToCart(id) {
    const days = parseInt(document.getElementById(`days-${id}`).value);
    const updatedCart = State.addToCart(id, days);
    UI.renderCart(updatedCart);
}

function filterTools(category) {
    if (category === 'all') {
        UI.renderTools(tools);
    } else {
        const filtered = tools.filter(t => t.category === category);
        UI.renderTools(filtered);
    }
}

function switchTab(tabId) {
    UI.switchTab(tabId);
}