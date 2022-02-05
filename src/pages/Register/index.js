export default function RegisterPage(){
    return(
        <>
            <h1>MyWallet</h1>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
            <Link to="/sign-up"><a href="#">Primeira vez? Cadastre-se!</a></Link>
        </>
    )
}