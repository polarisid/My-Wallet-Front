import { Frame } from "./style"
import { Link } from "react-router-dom"
export default function RegisterPage(){
    return(
        <>
        <Frame>
            <h1>MyWallet</h1>
            <input type="text" placeholder="Nome"/>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme a senha" />
            <button>Cadastrar</button>
            <Link to="/sign-in"><a href="#">Já tem uma conta? Entre agora!</a></Link>
        </Frame>
        </>
    )
}