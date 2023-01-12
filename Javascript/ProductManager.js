import fs from 'fs';

const IdExterior = 1

export default class ProductManager {
    constructor(){
        this.path = './Data/Products.json'
    }
    
    getProducts = async () => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const listaProd = JSON.parse(data);
            return listaProd;
        }
        else{
            return []
        }
    }
    crearProducto = async (producto) => {
        const listaProd =  await this.getProducts();
        if(users.length===0){
            producto.Id=1;
        }else{
            usuario.Id = IdExterior
            IdExterior++
        }
        users.push(producto);
        await fs.promises.writeFile(this.path,JSON.stringify(listaProd));
        return usuario;
    }

    getProductById = async (Id) => {
        const datos = await this.getProducts();
        let bandera = -1
        for (let i=0;i< datos.length;i++) {
            if(datos[i].Id == Id){
                bandera = i
            }
        }
        if(bandera == -1){
            return 0
        }
        else{
            return datos[i]
        }
    }

    deleteProduct = async (Id) => {
        const Lista = await this.getProducts();
        aux = await Lista.getProductById(Id)
        if(aux != 0){
            Lista.pop(aux)
        }
        else{
            console.log("No hay elemento a sacar")
        }
    }
}
