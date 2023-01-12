let IdExterior = 1

class Product{
    constructor(title,description,price,thumbnail,code,stock){
    this.title=title
    this.description=description
    this.price=price
    this.thumbnail=thumbnail
    this.code=code
    this.stock=stock
    this.Id=0
    }

    comparaCode(Comparacion){
        return this.code == Comparacion
    }

    validacion(){
        if(this.title != null && this.description != null && this.price != null && this.thumbnail != null && this.code != null && this.stock != null)
            return true
        else
            return false
    }

    muestraInfo(){
        console.log(`Producto: ${this.title}`)
        console.log(`Descripcion: ${this.description}`)
        console.log(`Precio: ${this.price}`)
        console.log(`Link: ${this.thumbnail}`)
        console.log(`Codigo de producto: ${this.code}`)
        console.log(`Aviable Stock: ${this.stock}`)
        console.log(`Id de producto: ${this.Id}`)
    }
}

class ProductManager{
    constructor(){
        this.products = [];
    }

    getListaProdMan(){
        return this.products
    }

    estaCode(Codigo){
        let bandera = false
        let aux = this.getListaProdMan()
        if(typeof aux.length == undefined || aux.length == null || aux.length == 0){
            return false
        }
        else{
            for (let i=0;i< aux.length;i++) {
                if (aux[i].comparaCode(Codigo) == true)
                    bandera = true
            }
            return bandera
        }
    }

    addProduct(Producto){
        if(this.estaCode(Producto.code) == false && Producto.validacion() == true){
            Producto.Id=IdExterior
            this.products.push(Producto)
            IdExterior++
        }
        else{
            console.log("No se puede agregar el producto en cuestion")
        }
    }

    muestraLista(){
        for (let i=0;i< this.getListaProdMan().length;i++) {
            this.getListaProdMan()[i].muestraInfo()
        }
    }

    getProductById(Id){
        let bandera = -1
        for (let i=0;i< this.getListaProdMan().length;i++) {
            if(this.getListaProdMan()[i].Id == Id){
                bandera = i
            }
        }
        if(bandera == -1){
            console.log("Element Not Found")
        }
        else{
            console.log(`Elemento encontrado en la pocision ${bandera}`)
        }
    }
}

let Lista = new ProductManager()
let ElemOne = new Product("Producto1","Descripcion1",1000,"Link1",007,8000)
let ElemTwo = new Product("Producto2","Descripcion2",2000,"Link1",005,9000)
let ElemThree = new Product("Producto3","Descripcion3",3000,"Link3",007,10000)

Lista.addProduct(ElemOne)
Lista.addProduct(ElemTwo)
Lista.addProduct(ElemThree)
Lista.muestraLista()
Lista.getProductById(7)
Lista.getProductById(2)