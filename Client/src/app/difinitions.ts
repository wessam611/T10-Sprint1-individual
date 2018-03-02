export class Cart {

    products: Product[] = [];
    totalPrice: number = 0;

}

export class Product {
    _id        :   any;
    name      :   string;
    price     :   number;
    created   :   string;
    updated   :   string;
    sellerName:   string;
}