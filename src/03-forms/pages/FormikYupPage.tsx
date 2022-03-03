
import { useFormik } from 'formik'
import * as Yup from 'yup';

interface FormData{
    firtsName:string;
    lastName:string;
    email:string;
}

export const FormikYupPage = () => {
    

    const { errors, handleSubmit, touched,  getFieldProps  } = useFormik<FormData>({
        initialValues: {
            firtsName: "",
            lastName: "",
            email: ""
        },
        onSubmit:( data )=>{
            console.log( data );
        },
        validationSchema: Yup.object({
            firtsName:  Yup.string()
                        .max(15, "No debe ser mayor a 15 caracteres")
                        .required("Campor requerido"),
            lastName:  Yup.string()
                        .max(15, "No debe ser mayor a 15 caracteres")
                        .required("Campor requerido"),
            email: Yup.string()
                    .required("campo requerido")
                    .email("Email no valido")
        })
    });
    
    return (
        <div>
            <h3>Formik Yup Page</h3>
            <form noValidate onSubmit={ handleSubmit } >
                
                <label htmlFor="firtsName">Firts Name</label>
                <input type="text" 
                    { ...getFieldProps("firtsName") }
                    autoComplete="off"
                />
                {  touched.firtsName && errors.firtsName && <span>{errors.firtsName}</span>}
                
                
                <label htmlFor="lastName">Last Name</label>
                <input type="text" 
                    { ...getFieldProps("lastName") }
                    autoComplete="off"
                />  
                { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                
                <label htmlFor="email">Email Name</label>
                <input type="text" 
                    { ...getFieldProps("email") }
                    autoComplete="off"
                />
                { touched.email && errors.email && <span>{errors.email}</span>}
                
                <button type='submit' >Aceptar</button>
                

            </form>    


        </div>
    )
}