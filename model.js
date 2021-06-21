export class Model {
    #data;
    constructor() {
        this.#data = [
            {
                img: "https://images.izi.ua/33164167",
                title: "Первый товар",
                cost: 210,
                amount: 1,
            },
            {
                img: "https://images.ua.prom.st/930200841_botinki-muzhskie-timberland.jpg",
                title: "Второй товар",
                cost: 180,
                amount: 1,
            },
            {
                img: "https://image.ua.market/storage/640x640/c/0/5/4/c054b0872713f662ff265f615bb884cc.jpg",
                title: "Третий товар",
                cost: 160,                    
                amount: 1,
            }
        ];
    }

    setAmountInc(i) {
        this.#data[i].amount++;
    }

    setAmountDec(i) {
        this.#data[i].amount--;
        if (this.#data[i].amount <= 0) {
            this.#data[i].amount = 0;
        }
    }

    getTotal() {
        let total = 0;
        for (let i = 0; i < this.#data.length; i++) {
            total = total + this.#data[i].cost * this.#data[i].amount;
        }
        return total;
    }

    setNewProduct(array) {
        console.log(array);
        let product = {
            img: array[2].value,
            title: array[0].value,
            cost: array[1].value,
            amount: 1,
        };
        this.#data.push(product);
    }

    deleteProduct(del) {
        if (del === 0) {
            this.#data.splice(del, del + 1);
        }
        this.#data.splice(del, del)
    }

    getData() {
        return this.#data;
    }

}