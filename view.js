export class View {
    constructor() {
        this.app = this.getElement("#app-root");
        this.wrapper = this.createElement("div", "wrapper");
        this.wrapper_2 = this.createElement("div", "wrapper_2");
        this.app.append(this.wrapper, this.wrapper_2);

        this.form = this.createElement("form");
        this.input_img = this.createElement("input");
        this.input_img.type = "text";
        this.input_title = this.createElement("input");
        this.input_title.type = "text";
        this.input_cost = this.createElement("input");
        this.input_amount = this.createElement("input");
        this.h4_title = this.createElement("h4");
        this.h4_title.textContent = "Название товара";
        this.h4_cost = this.createElement("h4");
        this.h4_cost.textContent = "Цена в $";
        this.h4_img = this.createElement("h4");
        this.h4_img.textContent = "Ссылка на фото";
        this.submitButton = this.createElement("button", "addProduct");
        this.submitButton.textContent = "Add";
        this.form.append(this.h4_title, this.input_title, this.h4_cost, this.input_cost, this.h4_img, this.input_img, this.submitButton);
        this.wrapper_2.append(this.form);
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
            const btnDelete = this.createElement("button", "btn_del", "Del");
            const amount = this.createElement("p");
            amount.textContent = products[i].amount;
            btnContainer.append(btnInc, amount, btnDec, btnDelete);
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
    getElements(selector) {
        const element = document.querySelectorAll(selector);
        return element;
    }
    setProductTotal(value) {
        const total = this.getElement(".total");
        total.textContent = "Ожидаемый доход: " + value + "$";
        console.log(total.textContent);
    }
}