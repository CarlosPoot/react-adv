import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug 2 - Card',
    img: './coffee-mug2.png'
}


const productos:Product[] = [
    product,
    product2
]


interface ProductInCart extends Product{
    counter:number;
}


export const ShoppingPage = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});


    const handleChange = ( counter:number, product:Product) =>{
        setShoppingCart( oldShoppingCart => {
            const prductInCart:ProductInCart = oldShoppingCart[product.id] || {  ...product, counter:0 };
            if(  Math.max(  prductInCart.counter + counter , 0  )  > 0 ){
                prductInCart.counter += counter;
                return {
                    ...oldShoppingCart,
                    [product.id]: prductInCart
                }
            }

            let { [product.id]:productDelet, ...rest } = oldShoppingCart;
            return  rest;


            // if( counter <= 0 ){
            //     let { [product.id]:productDelet, ...rest } = oldShoppingCart;
            //     return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: { ...product, counter }
            // }
        });    
    }


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    productos.map( product => (
                        <ProductCard 
                            key={ product.id }
                            product={ product }
                            className="bg-dark text-white"
                            onChange={ handleChange }
                            value = { shoppingCart[product.id]?.counter || 0  }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>


            <div className='shopping-cart'>
                
                {  
                
                    Object.entries(shoppingCart).map( ([ key, detalleProducto ])=> (
                        <ProductCard 
                            key={ key }
                            product={ detalleProducto }
                            className="bg-dark text-white"
                            style={{
                                width: '100px'
                            }}
                            onChange = { handleChange }
                            value={detalleProducto.counter}
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>


                    ))
                
                }

            </div>
        </div>

    )
}
