import styled,{ css } from 'styled-components';

export const SaldoContainer =styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    background-color:#fff;
    width: 99%;

    .value{
        color:#03AC00;
        ${props => (props.id) && css`
            color: #C70000; `
    }}
    }

    .saldo{
        font-family: Raleway;
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
    }
`

export const Frame = styled.div`


@keyframes scale-in {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }}


    position:relative;
    background-color: #925ABE;
    display:flex;
    min-height:100vh;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

.top-content{
    margin-top:25px;
    width: 90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ion-icon{
        font-size: 26px;
        color:#fff;
    }
    h1{
        
        font-family: Raleway;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        color:#fff;
}
}

button{
    padding:10px;
    height: 114px;
    width: 49.4%;
    border-radius: 5px;
    background-color: #A328D6;
    color:#fff;
    font-family: Raleway;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    border-radius: 5px;
    border:none;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

}
.bottom-content{
    width:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

`
export const Historic =styled.div`
    position: relative;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: Raleway;
    background-color: #fff;
    width:90%;
    height:65vh;
    border-radius: 5px;
    padding:20px 10px;
    overflow-y: scroll;
   


`

export const Item = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    font-size:16px;
    p{
        margin-right:10px;
    }
    div{
        display:flex;
    }
    .date{
        color:#C6C6C6;
    }
    .value{
        color:#03AC00;
        ${props => (props.type=="output") && css`
            color: #C70000; `
    }}

`
export const Modal =styled.div`
display:none;
${props => (props.state) && css`
    display:block; `
}}z-index:11; 
padding-top:25px;
position: absolute;
width: 100%;
height: 100%;
background-color: black;
background-color: rgba(0, 0, 0, 0.4);

.modal-content{
    -webkit-animation: scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
	        animation: scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
padding:10px;
border-radius:5px;
margin:0 auto;
z-index:10;
background-color: #925ABE;
width: 70%;
height: 90%;

.top{
    margin-top:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    ion-icon{
        color:#fff;
        font-size:30px;
    }
}
h1{ 
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    color:#fff;
}
button{
    display: flex;
    align-items:center;
    justify-content:center;
    margin:10px auto;
    width: 100%;
    height:58px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
}
input{
    margin:10px 0px;
    border-radius: 5px;
    height: 58px;
    border:none;
    ::placeholder{
        font-family: Raleway;
        font-size:20px;
        border-radius: nullpx;
        color: #000000;

    }
}}
`