import LMain from "../layouts/Main"
import RecipeReviewCard from "../components/card"

const ObtenerProductosPorCategoria = async () => {
    return new Promise (async(resolve, reject) => {
        try {
            const ruta = `https://fakestoreapi.com/products/category/electronics`
            const response = await fetch(ruta);
            const data = await response.json();
            let productos = []
            data.forEach(producto => {
                let obj = {titulo: producto.title, precio: producto.price, imagen:producto.image}
                productos.push(obj)
            });
            resolve(productos)
        } catch (error) {
            reject(new Error("Error obteniendo los productos por categoria", error))
            console.error('Error al obtener categorias:', error)
        }
    })
}
const productos = await ObtenerProductosPorCategoria()


export default function Electronics() {
   
      return  (
        <LMain>
        <div style={{
            display: "flex", 
            flexDirection:"row", flexWrap:"wrap", 
            justifyContent: "start",
        }} >
            {
            productos.map((prod) =>                 
            <RecipeReviewCard data={prod}>

            </RecipeReviewCard>
                )
            }
        </div>
        </LMain>
      ) 
}


    
