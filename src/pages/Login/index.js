import { Frame } from "./style"
import { Link } from "react-router-dom"
export default function LoginPage(){
    return(
        <>
        <Frame>
            <h1>MyWallet</h1>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
            <Link to="/sign-up"><a href="#">Primeira vez? Cadastre-se!</a></Link>
        </Frame>
        </>
    )
}