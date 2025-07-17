export class Products {
    constructor() {
        this.productsElement = document.querySelector('.products');
        this.getProducts().then(products => this.fillProducts(products));
    };
    async getProducts() {
        const response = await fetch('http://localhost:3000/api/products');
        return await response.json();
    };
    fillProducts(products) {
        if (products && products.length > 0) {
            products.forEach(product => {
                const productEl = document.createElement('a');
                productEl.className = 'product';
                productEl.href = '/#/product?id=' + product.id;

                const titleEl = document.createElement('div');
                titleEl.className = 'title';
                titleEl.innerText = product.title;

                const descriptionEl = document.createElement('div');
                descriptionEl.className = 'description';
                descriptionEl.innerText = product.description;

                const priceEl = document.createElement('div');
                priceEl.className = 'price';
                priceEl.innerText = product.price + ' $';

                productEl.appendChild(titleEl);
                productEl.appendChild(descriptionEl);
                productEl.appendChild(priceEl);

                this.productsElement.appendChild(productEl);
            });
        }
    };
}