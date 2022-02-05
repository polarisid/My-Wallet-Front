import { Frame } from "./style";
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function RegisterPage(){
    const navigate = useNavigate();
    const [email,setEmail]= useState('')
    const [name,setName]= useState('')
    const [password,setPassword]= useState('')
    const [passwordConfirm,setPasswordConfirm]= useState('');

    function Submit(event){
        event.preventDefault();
        if(password!==passwordConfirm){
            alert("As senhas nos campos não correspondem!");
            return;
        }
        const promisse = axios.post("http://localhost:5000/sign-up",{
            email: email.toLowerCase(),
            name: name,
            password: password,
            })
        promisse.then((response)=>
            {
                if(response.status===201){
                    alert("Sucesso, vamos fazer o login? ;)")
                    navigate("/")
                    return
                }
                else{
                    alert("Erro ao registrar!")
                    return
                }
            })
        promisse.catch(error=>
            {
                alert(error)
            })
    }
    return(
        <>
        <Frame>
            <h1>MyWallet</h1>
            <form onSubmit={Submit}>
                <input type="text" placeholder="Nome" onChange={(e) =>(setName(e.target.value))}/>
                <input type="email" placeholder="E-mail" onChange={(e) =>(setEmail(e.target.value))}/>
                <input type="password" placeholder="Senha" onChange={(e) =>(setPassword(e.target.value))}/>
                <input type="password" placeholder="Confirme a senha" onChange={(e) =>(setPasswordConfirm(e.target.value))}/>
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/sign-in"><a>Já tem uma conta? Entre agora!</a></Link>
        </Frame>
        </>
    )
}

