import { useEffect, useRef, useState } from 'react'
import { Product } from '../interfaces/interfaces';



export const useProduct = ( { onChange, product, value = 0 }:{ onChange?:(counter:number, product:Product) => void, product:Product, value:number } ) => {

    const [ counter, setCounter ] = useState( value );
    const controladoFuera = useRef( !!onChange );
  
    const increaseBy = ( valorIncremento: number ) => {
        if( controladoFuera.current ){
            return onChange!( valorIncremento , product );
        }
        
        let newValue = Math.max( counter + valorIncremento, 0 );
        setCounter( newValue )
        onChange && onChange( newValue, product );
    }

    useEffect(() => {
        setCounter(value);
    }, [ value ])

    return {
        counter,
        increaseBy
    }

}