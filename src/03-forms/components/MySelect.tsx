import { ErrorMessage, Field } from 'formik';

interface Props {
    label:string;
    name:string;
    [x:string]:any
}

export const MySelect = ({ label, ...props }:Props) => {
    return (
        <>  
            <label htmlFor={  props.id || props.name }>{ label }</label>
            <Field { ...props }/>
            <ErrorMessage name={ props.name } component="span"/>
        </>
    )
}
