import axios from 'axios';

const BASE_URL = 'https://mywalletbackendapp.herokuapp.com/';
 function login(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}
function register(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function getWallet(body){
    const promisse = axios.get(`${BASE_URL}/entry?token=${body.token}&userid=${body.userId}`)
    return promisse;
}

function postWallet(body,token,userId){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    let header ={
            "Authorization":`Bearer ${token}`,
            "userid":userId
    }
    let value={
        "date":dd+"/"+mm,
        "name":body.name,
        "value":body.value,
    }
    if(body.type=="entrada"){
        const promisse = axios.post(`${BASE_URL}/entry`,
    {...value,"type":"input"},{headers: header })
    console.log(header)
    return promisse;
    }
    if(body.type=="saida"){
        const promisse = axios.post(`${BASE_URL}/entry`,
    {...value,"type":"output"},{headers: header })
    console.log(header)
    return promisse;
    }

}

const api = {
    login,
    register,
    getWallet,
    postWallet

  }
  
  export default api;