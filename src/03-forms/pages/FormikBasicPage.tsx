
import { FormikErrors, useFormik } from 'formik'

interface FormData{
    firtsName:string;
    lastName:string;
    email:string;
}

export const FormikBasicPage = () => {
    
    const validaciones = ( data:FormData )=>{
        
        const errors:FormikErrors<FormData> = {};

        if( !data.firtsName ){
            errors.firtsName = "Ingresa tu primer nombre";
        }

        if( !data.lastName ){
            errors.lastName = "Ingresa tu segundo nombre";
        }

        if( !data.email ){
            errors.email = "Ingresa tu email";
        } 

        return errors;
    
    }


    const { errors, handleSubmit, handleChange, handleBlur ,touched } = useFormik<FormData>({
        initialValues: {
            firtsName: "",
            lastName: "",
            email: ""
        },
        onSubmit:( data )=>{
            console.log( data );
        },
        validate: validaciones
    });
    
    return (
        <div>
            <h6>FormikBasicPage</h6>
            <form noValidate onSubmit={ handleSubmit } >
                
                <label htmlFor="firtsName">Firts Name</label>
                <input type="text" 
                    name='firtsName'
                    onBlur={ handleBlur }
                    onChange={handleChange}
                    autoComplete="off"
                />
                {  touched.firtsName && errors.firtsName && <span>{errors.firtsName}</span>}
                
                
                <label htmlFor="lastName">Last Name</label>
                <input type="text" 
                    name='lastName'
                    onBlur={ handleBlur }
                    onChange={handleChange}
                    autoComplete="off"
                />
                { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                
                <label htmlFor="email">Email Name</label>
                <input type="text" 
                    name='email'
                    onBlur={ handleBlur }
                    onChange={handleChange}
                    autoComplete="off"
                />
                { touched.email && errors.email && <span>{errors.email}</span>}
                
                <button type='submit' >Aceptar</button>
            </form>    


        </div>
    )
}