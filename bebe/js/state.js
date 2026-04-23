const State = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    getCart() { return this.cart; },
    addToCart(toolId, days) {
        const tool = tools.find(t => t.id === toolId);
        const existing = this.cart.find(c => c.id === toolId);
        if (existing) existing.days += days;
        else this.cart.push({ ...tool, days });
        localStorage.setItem('cart', JSON.stringify(this.cart));
        return this.cart;
    }
};