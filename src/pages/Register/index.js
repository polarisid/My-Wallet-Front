import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ThreeDots} from 'react-loader-spinner';
import { Frame } from "./style";
import {Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import api from  '../../services/api';
import {InputStyled,ButtonStyled} from "../Components/formStyled"
export default function RegisterPage(){
    const navigate = useNavigate();
    const [form, setForm] =useState({email:"",name:"",password:"",passwordConfirm:""})
    const [disabled,setDisabled] = useState(false)
    function Submit(event){
        setDisabled(true)
        event.preventDefault();
        if(form.password!==form.passwordConfirm){
            alert("As senhas nos campos não correspondem!");
            setDisabled(false)
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
                type="text" 
                placeholder="Nome" 
                onChange={(e) =>{setForm({ ...form, [e.target.name]: e.target.value })}}
                name="name"
                value={form.name}
                />
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
                <InputStyled 
                disabled={disabled}
                required
                type="password" 
                placeholder="Confirme a senha" 
                onChange={(e) =>{setForm({ ...form, [e.target.name]: e.target.value })}}
                name="passwordConfirm"
                value={form.passwordConfirm}
                />
                <ButtonStyled disabled={disabled} type="submit">{disabled?
                    <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
                :"Cadastrar"}</ButtonStyled>
            </form>
            <Link to="/sign-in"><a>Já tem uma conta? Entre agora!</a></Link>
        </Frame>
        </>
    )
}

