import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikYupPageComponent } from '../03-forms/pages/FormikYupPageComponent';
import { FormikYupComponentField } from '../03-forms/pages/FormikYupComponentField';

export const Navigation = () => {


    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic-page" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup-page" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup-page-component" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup Component</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup-component-field" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Component Field</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={ <RegisterPage /> } />
                    <Route path="formik-basic-page" element={  <FormikBasicPage /> } />
                    <Route path="formik-yup-page" element={ <FormikYupPage /> } />                    
                    <Route path="formik-yup-page-component" element={ <FormikYupPageComponent /> } />                    
                    <Route path="formik-yup-component-field" element={ <FormikYupComponentField /> } />                    
                    <Route path="/*" element={ <Navigate to="/register" replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
