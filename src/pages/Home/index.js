import { Frame,Historic,Item,Modal,SaldoContainer } from "./style";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ThreeDots} from 'react-loader-spinner';
import { Link,useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {InputStyled,ButtonStyled} from "../Components/formStyled"
import { useEffect,useState, useRef } from "react";
import api from "../../services/api";
export default function HomePage(){
    const navigate =useNavigate();
    const {auth,login} = useAuth();
    const {token,userId}=auth;
    const [disabled,setDisabled] = useState(false)
    const [modal,setModalState]= useState({state:false,type:""});
    const [form,setForm]=useState({name:"",value:"",type:""})
    const [historic, setHistoric] = useState([]);
  
   
    useEffect(loadWallet, []);
    
    function logout(){
        login([])
        alert("Até logo ;<");
        localStorage.clear();
        navigate("/sign-in");
    }
    function loadWallet() {
        const promisse = api.getWallet(auth);
        promisse.then((response) => {
            setHistoric(response.data);
        });
        promisse.catch(error=>{
            alert(error.response.data.message)
            navigate("/")
        })      
      }
    function openModal(e){
        setModalState({state:!modal.state,type:e.target.id})
    }
    function clean(){
        setForm({name:"",value:"",type:""})
    }
    function submit(event){
        setDisabled(true)
        event.preventDefault();
        
        const promisse = api.postWallet(form,token,userId);
        promisse.then((response)=>{
            setModalState({...modal,state:!modal.state})
            loadWallet();
            setDisabled(false)
        })
        promisse.catch((e)=>{
            console.log(e);setDisabled(false)})
        clean()
       


    }

    function count(){
        let value=0;
       historic.map(item=>{if(item.type=="input"){value=value+parseFloat(item.value)}else{value=value-parseFloat(item.value)}}) 
       console.log(value)
       return value.toLocaleString('pt-BR')
    }
    return(
        <>
        <Frame>
                <Modal onClick={(e)=>{setModalState({...modal,state:!modal.state});clean()}} state={modal.state}>
                    <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                        <div className="top"><h1>Nova {modal.type}</h1> <ion-icon onClick={(e)=>{setModalState({...modal,state:!modal.state});clean()}} name="close-circle-outline"></ion-icon></div>
                        <form onSubmit={submit}>
                            <input 
                            disabled={disabled}
                            required 
                            type="number" 
                            placeholder="Valor"
                            onChange={(e) =>{setForm({ ...form, [e.target.name]: parseFloat(e.target.value),type:modal.type})}}
                            value={form.value}
                            name="value"
                            />
                            <input 
                            disabled={disabled}
                            required 
                            type="text" 
                            placeholder="Descrição"
                            onChange={(e) =>{setForm({ ...form, [e.target.name]: e.target.value,type:modal.type })}}
                            value={form.name}
                            name="name"
                           />
                            <ButtonStyled disabled={disabled} type="submit">                {disabled?
                    <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
                :`Salvar ${modal.type}`}</ButtonStyled>
                        </form>
                    </div>                    
                </Modal>
            <div className="top-content">
                <h1>Olá {auth.name}</h1>
                <ion-icon onClick={()=>logout()}name="exit-outline"></ion-icon>
            </div>

            <Historic>
                
                {historic.length>0?historic.map((item)=>
                <Item type={item.type}> <div><p className="date">{item.date}</p><p>{item.name}</p></div> <p className="value" >{item.value.toLocaleString('pt-BR')}</p></Item>):
                <p>Não há registros de entrada ou saída</p>}
                
            <SaldoContainer id={count()<0} > <p className="saldo">Saldo</p> <p className="value" >{count()}</p></SaldoContainer>
            </Historic>
            <div className="bottom-content">
                <button id="entrada" onClick={(e)=>openModal(e)}><ion-icon name="add-circle-outline"></ion-icon> <div><p>Nova</p><p>entrada</p></div></button>
                <button id="saida" onClick={(e)=>openModal(e)}><ion-icon name="remove-circle-outline"></ion-icon><div><p>Nova</p><p>saída</p></div></button>
            </div>
        </Frame>
        </>
    )
}