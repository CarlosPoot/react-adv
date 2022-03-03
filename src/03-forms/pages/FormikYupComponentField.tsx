
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { MySelect } from '../components/MySelect';


interface FormData{
    firtsName:string;
    lastName:string;
    email:string;
}

export const FormikYupComponentField = () => {
    
    return (
        <div>
            <h3>Formik Yup Component Field</h3>

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
                            
                            <MySelect label='Firts Name' name='firtsName' />
                            {/* <label htmlFor="firtsName">Firts Name</label>
                            <Field name="firtsName" type="text" />
                            <ErrorMessage name='firtsName' component="span"  />  */}

                            {/* <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name='lastName' component="span" />  */}

                            <MySelect label='Last Name' name='lastName' />

                            {/* <label htmlFor="email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name='email' component="span" /> */}

                            <MySelect label='email' name='email' />

                            <MySelect label='Terminos y condiciones' name='term' type="checkbox"/>

                            {/* <label>
                                <Field name="term" type="checkbox" />
                                Terminos y condiciones
                            </label>
                            <ErrorMessage name='term' component="span" /> */}

                            <MySelect label='Trabajo' name='trabajo' as="select">
                                <option value="" >Selecciona Trabajo</option>
                                <option value="1" >Trabajo 1</option>
                                <option value="2" >Trabajo 2</option>
                                <option value="3" >Trabajo 3</option>
                            </MySelect>


                            <button type='submit' >Aceptar</button>

                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}