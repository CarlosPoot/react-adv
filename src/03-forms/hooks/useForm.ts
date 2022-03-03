import { ChangeEvent, useState } from 'react';


export const useForm = <T>( initialValues:T ) => {

    const [ formData, setFormData ] = useState( initialValues );

    const onChange = ( evento:ChangeEvent<HTMLInputElement> )=>{
        if( evento ){
            setFormData({
                ...formData,
                [evento.target.name]: evento.target.value
            });
        }
    }

    return {
        ...formData,
        formData,
        onChange
    }
}

