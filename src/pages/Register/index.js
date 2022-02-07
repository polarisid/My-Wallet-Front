import { Frame } from "./style";
import {Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import api from  '../../services/api';

export default function RegisterPage(){
    const navigate = useNavigate();
    const [form, setForm] =useState({email:"",name:"",password:"",passwordConfirm:""})

    function Submit(event){
        event.preventDefault();
        if(form.password!==form.passwordConfirm){
            alert("As senhas nos campos não correspondem!");
            return;
        }
        const promisse = api.register({
            email: form.email.toLowerCase(),
            name: form.name,
            password: form.password,
        })
        promisse.then((response)=>
            {
                if(response.status===201){
                    alert("Sucesso, vamos fazer o login? ;)")
                    navigate("/")
                    return
                }
            })
        promisse.catch(error=>
            {
                console.log(error.response.data.message)
                alert(error.response.data.message)
            })
    }
    return(
        <>
        <Frame>
            <h1>MyWallet</h1>
            <form onSubmit={Submit}>
                <input 
                required
                type="text" 
                placeholder="Nome" 
                onChange={(e) =>{setForm({ ...form, [e.target.name]: e.target.value })}}
                name="name"
                value={form.name}
                />
                <input 
                required
                type="email" 
                placeholder="E-mail" 
                onChange={(e) =>{setForm({ ...form, [e.target.name]: e.target.value })}}
                name="email"
                value={form.email}
                />
                <input 
                required
                type="password" 
                placeholder="Senha" 
                onChange={(e) =>{setForm({ ...form, [e.target.name]: e.target.value })}}
                name="password"
                value={form.password}
                />
                <input 
                required
                type="password" 
                placeholder="Confirme a senha" 
                onChange={(e) =>{setForm({ ...form, [e.target.name]: e.target.value })}}
                name="passwordConfirm"
                value={form.passwordConfirm}
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/sign-in"><a>Já tem uma conta? Entre agora!</a></Link>
        </Frame>
        </>
    )
}

