const UI = {
    renderTools(toolsList) {
        const container = document.getElementById('tools-list');
        container.innerHTML = toolsList.map(t => `
            <div class="tool-card">
                <h3>${t.name}</h3>
                <small style="color: #64748b;">${t.category}</small>
                <p>Precio: <strong>$${t.price}</strong></p>
                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="number" id="days-${t.id}" value="1" min="1" class="days-input">
                    <button class="add-btn" data-id="${t.id}" onclick="handleAddToCart(${t.id})">Reservar</button>
                </div>
            </div>
        `).join('');
    },
    renderCart(cart) {
        const cartList = document.getElementById('cart-items');
        cartList.innerHTML = cart.map(item => `<li>${item.name} (${item.days} días) - $${item.price * item.days}</li>`).join('');
        document.getElementById('total').textContent = cart.reduce((s, i) => s + (i.price * i.days), 0);
    },
    switchTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    }
};