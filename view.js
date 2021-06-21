export class View {
    constructor() {
        this.app = this.getElement("#app-root");
        this.wrapper = this.createElement("div", "wrapper");
        this.app.append(this.wrapper);
    }

    renderProducts(products) {
        const elements = document.querySelectorAll(".container");
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
        const total = this.getElement(".total");
        total.remove();
        this.productsOnBasket(products);
    }

    productsOnBasket(products) {
        for (let i = 0; i < products.length; i++) {
            const productContainer = this.createElement("div", "container");
            productContainer.setAttribute("data-id", i);
            const img = this.createElement("img");
            img.src = products[i].img;
            const textContainer = this.createElement("div", "product-text-container");
            const title = this.createElement("h4");
            title.textContent = products[i].title;
            const cost = this.createElement("h4");
            cost.textContent = products[i].cost + "$";
            textContainer.append(title, cost);
            const btnContainer = this.createElement("div", "btn-container");
            const btnInc = this.createElement("button", "btn", "+");
            const btnDec = this.createElement("button", "btn", "-");
            const amount = this.createElement("p");
            amount.textContent = products[i].amount;
            btnContainer.append(btnInc, amount, btnDec);
            productContainer.append(img, textContainer, btnContainer);
            this.wrapper.append(productContainer);
        }
        const total = this.createElement("h2", "total", "Total");
        this.wrapper.append(total);
    }

    createElement(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        if (text) element.innerHTML = text;
        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    setProductTotal(value) {
        const total = this.getElement(".total");
        total.textContent = "Total: " + value + "$";
        console.log(total.textContent);
    }
}