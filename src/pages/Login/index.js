import { Frame } from "./style"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ThreeDots} from 'react-loader-spinner';

import {Link,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import api from  '../../services/api';
import useAuth from "../../hooks/useAuth";
import {InputStyled,ButtonStyled} from "../Components/formStyled"
export default function LoginPage(){
    const [form, setForm] = useState({ email: '', password: '' })
    const [disabled,setDisabled] = useState(false)
    const navigate = useNavigate();
    const { auth, login } = useAuth();

    useEffect(() => {

        if (auth && auth.token) {
          navigate("/home");
        }
      }, []);

    function Submit(event){
        setDisabled(true)
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
                setDisabled(false)
            })
        promisse.catch(error=>
            {
                setDisabled(false)
                console.log(error.response.data.message)
                alert(error.response.data.message)
                
            })
    }
    return(
        <>
        <Frame>
            <h1>MyWallet</h1>
            <form onSubmit={Submit}>
            <InputStyled 
                disabled={disabled}
                required 
                type="email" 
                placeholder="E-mail" 
                onChange={(e) =>{setForm({ ...form, [e.target.name]: e.target.value })}}
                name="email"
                value={form.email}
            />
            <InputStyled 
                disabled={disabled}
                required 
                type="password" 
                placeholder="Senha" 
                onChange={(e) =>{setForm({ ...form, [e.target.name]: e.target.value })}}
                name="password"
                value={form.password}
            />
            <ButtonStyled disabled={disabled} type="submit">
                {disabled?
                    <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
                :"Entrar"}</ButtonStyled>
            </form>
            <Link to="/sign-up"><a> Primeira vez? Cadastre-se!</a></Link>
        </Frame>
        </>
    )
}