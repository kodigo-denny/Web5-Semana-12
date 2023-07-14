class Order{
    lineItems
    shipping
    total
    peso

    constructor(shipping, total, peso){
        this.shipping = shipping
        this.total = total
        this.peso = peso
    }

    getTotal(){
        return this.total
    }

    getPeso(){
        return this.peso
    }

    getShippingCost(){
        return this.shipping.getCost(this)
    }

}


class Shipping{

    getCost(orden){
        return 0
    }

    getDate(orden){
        return new Date();
    }
}

class Ground extends Shipping{
    getCost(orden){
        if(orden.getTotal() > 100){
            return 0
        }
        return orden.getPeso() * 1.5
    }
}

class Air extends Shipping{
    getCost(orden){
        return orden.getPeso() * 3
    }
}

class Drone extends Shipping{
    getCost(orden){
        return orden.getPeso() * 5
    }
}