export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.product = this.model.getData();
        this.view.productsOnBasket(this.product);
        this.setAmount();
        this.view.setProductTotal(this.model.getTotal());
    }

    setAmount() {
        const wrapper = this.view.getElement("#app-root");
        wrapper.addEventListener("click", (evt) => {
            evt.preventDefault();
            if (evt.target.tagName === "BUTTON") {
                const btn = evt.target;
                if (btn.textContent === "+") {
                    this.model.setAmountInc(
                        btn.parentNode.parentNode.getAttribute("data-id")
                    );
                }
                if (btn.textContent === "-") {
                    this.model.setAmountDec(
                        btn.parentNode.parentNode.getAttribute("data-id")
                    );
                }
                if (btn.textContent === "Add") {
                    const value = this.view.getElements("input");
                    this.model.setNewProduct(value);
                }
                if (btn.textContent === "Del") {
                    this.model.deleteProduct(
                        btn.parentNode.parentNode.getAttribute("data-id")
                    );
                }
                this.total = this.model.getTotal();
                this.view.renderProducts(this.product);
                this.view.setProductTotal(this.total);
            }
        });
    }
    
}