import { UrlManager } from "../utils/url-manager.js";

export class Product {
    constructor() {
        this.productElement = document.querySelector('.product');
        this.id = UrlManager.getQueryParams()['id'];
        this.getProduct(this.id).then(product => this.fillProduct(product));
    };
    async getProduct(id) {
        const response = await fetch('http://localhost:3000/api/products/' + id);
        return await response.json();
    };
    fillProduct(product) {
        if (product) {
            const titleEl = document.createElement('div');
            titleEl.className = 'title';
            titleEl.innerText = product.title;

            const descriptionEl = document.createElement('div');
            descriptionEl.className = 'description';
            descriptionEl.innerText = product.description;

            const priceEl = document.createElement('div');
            priceEl.className = 'price';
            priceEl.innerText = product.price + ' $';

            this.productElement.appendChild(titleEl);
            this.productElement.appendChild(descriptionEl);
            this.productElement.appendChild(priceEl);


        };
    };
}
