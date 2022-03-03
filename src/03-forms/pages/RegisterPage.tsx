
import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const {  name, email, password, password2, onChange } = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const onSubmit = ( evento:FormEvent<HTMLFormElement> ) =>{

        evento.preventDefault();

    }

    return (
        <div>

            <h1>Register Page</h1>

            <form noValidate  onSubmit={ onSubmit}>

                <input 
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={ name }
                    onChange={ onChange }
                />

                <input 
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={ email }
                    onChange={ onChange }
                />

                <input 
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={ password }
                    onChange={ onChange }
                />

                <input 
                    type="password"
                    name='password2'
                    placeholder='Repeat Password'
                    value={ password2 }
                    onChange={ onChange }
                />

                <button type='submit' >Register</button>
            </form>
            
        </div>
    )
}
