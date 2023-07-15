class Singleton{
    static singleton
    numero
    constructor(){
        this.numero = Math.random()
    }

    static getInstance(){
        if(Singleton.singleton === undefined)
            Singleton.singleton = new Singleton()
        return Singleton.singleton
    }
}