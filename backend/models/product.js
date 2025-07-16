const { readFile } = require("fs");
const path = require("path");

class ProductModel {
    static path = path.join(__dirname, '../db', 'products.json');
    static async findAll() {
        return new Promise((resolve, reject) => {
            readFile(this.path, 'utf-8', (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });
    };
    static async find(id) {
        return new Promise((resolve, reject) => {
            readFile(this.path, 'utf-8', (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    try {
                        const products = JSON.parse(data);
                        const product = products.find(item => +item.id === +id);
                        if (product) {
                            resolve(product);
                        } else {
                            reject('Продукт не найден');
                        }
                    } catch (e) {
                        reject('Невозможно обработать данные')
                    }
                }
            });
        });
    };
    static async create(newProduct) {
        return new Promise((resolve, reject) => {
            readFile(this.path, 'utf-8', (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    try {
                        const products = JSON.parse(data);
                        products.push(newProduct);
                        const newJSON = JSON.stringify(products);
                        fs.writeFile(this.path,newJSON,'utf-8',(error,data)=>{
                            if(error){
                                reject(error);
                            }else{
                                resolve(newProduct)
                            }
                        })
                    } catch (e) {
                        reject('Невозможно обработать данные')
                    }
                }
            });
        });
    };
    static async change(id, newProduct) {
        return new Promise((resolve, reject) => {
            readFile(this.path, 'utf-8', (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    try {
                        const products = JSON.parse(data);
                        const product = products.find(item => +item.id === +id);
                        if (product) {
                            resolve(product);
                        } else {
                            reject('Продукт не найден');
                        }
                        products.push(newProduct);
                        const newJSON = JSON.stringify(products);
                        fs.writeFile(this.path,newJSON,'utf-8',(error,data)=>{
                            if(error){
                                reject(error);
                            }else{
                                resolve(newProduct)
                            }
                        })
                    } catch (e) {
                        reject('Невозможно обработать данные')
                    }
                }
            });
        });
    };
}

module.exports = ProductModel;