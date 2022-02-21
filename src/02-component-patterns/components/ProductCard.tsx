import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    onChange?: ( counter:number, product:Product) => void;
    product: Product;
    style?: React.CSSProperties;
    value?: number
}


export const ProductCard = ({ children, product, className, style, onChange, value = 0 }: Props ) => {

    const { counter, increaseBy } = useProduct( { onChange, product, value });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }>
                    { children }
            </div>
        </Provider>
    )
}
