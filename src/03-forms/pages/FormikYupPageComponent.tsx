
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


interface FormData{
    firtsName:string;
    lastName:string;
    email:string;
}

export const FormikYupPageComponent = () => {
    
    return (
        <div>
            <h3>Formik Yup Page Component</h3>

            <Formik 
                initialValues={{
                    firtsName: "",
                    lastName: "",
                    email: "",
                    term: false,
                    trabajo: ""
                }}
                validationSchema={ Yup.object({
                    firtsName:  Yup.string()
                        .max(15, "No debe ser mayor a 15 caracteres")
                        .required("Campor requerido"),
                    lastName:  Yup.string()
                                .max(15, "No debe ser mayor a 15 caracteres")
                                .required("Campor requerido"),
                    email: Yup.string()
                            .required("campo requerido")
                            .email("Email no valido"),
                    term: Yup.boolean()
                            .oneOf([true], "Los terminos y condiciones deben ser aceptadas"),
                    trabajo: Yup.string()
                                .required("Selecciona una opcin valida")
                                .notOneOf(["2"],"Opcion no permitida")
                })}
                onSubmit = {(valores:FormData)=>{
                    console.log( valores )
                }}
            >
                {
                    ( formmik )=>(
                        <Form>
                            
                            <label htmlFor="firtsName">Firts Name</label>
                            <Field name="firtsName" type="text" />
                            <ErrorMessage name='firtsName' component="span"  /> 

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name='lastName' component="span" /> 
                            
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name='email' component="span" />

                            <label>
                                <Field name="term" type="checkbox" />
                                Terminos y condiciones
                            </label>
                            <ErrorMessage name='term' component="span" />

                            <Field name="trabajo" as="select">
                                <option value="1" >Trabajo 1</option>
                                <option value="2" >Trabajo 2</option>
                                <option value="3" >Trabajo 3</option>
                            </Field>
                            <ErrorMessage name='trabajo' component="span"/>


                            <button type='submit' >Aceptar</button>

                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}