let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Lógica de Pestañas
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(section => section.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderTools(tools);
    renderCart(cart);
});

// Event Delegation
document.getElementById('reserva').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const id = parseInt(e.target.dataset.id);
        const days = parseInt(document.getElementById(`days-${id}`).value);
        
        const tool = tools.find(t => t.id === id);
        const existing = cart.find(c => c.id === id);
        
        if (existing) existing.days += days;
        else cart.push({ ...tool, days });
        
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(cart);
    }
});