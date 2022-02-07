import { Frame } from "./style"
import {Link,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import api from  '../../services/api';
import useAuth from "../../hooks/useAuth";

export default function LoginPage(){
    const [form, setForm] = useState({ email: '', password: '' })
    const navigate = useNavigate();
    const { auth, login } = useAuth();

    useEffect(() => {
        if (auth && auth.token) {
          navigate("/home");
        }
      }, []);

    function Submit(event){
        event.preventDefault();
        const promisse = api.login({ 
            email: form.email.toLowerCase(),
            password: form.password,
        });
        
        promisse.then((response)=>
            {
                if(response.status===200){
                    console.log(response.data)
                    login(response.data)
                    alert("Sucesso ;)")
                    navigate("/home")
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
            <button type="submit">Entrar</button>
            </form>
            <Link to="/sign-up"><a> Primeira vez? Cadastre-se!</a></Link>
        </Frame>
        </>
    )
}