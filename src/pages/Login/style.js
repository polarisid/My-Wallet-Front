import styled,{ css } from 'styled-components';

export const Frame = styled.div`
form{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
}
background-color: #925ABE;
display:flex;
min-height:100vh;
flex-direction:column;
align-items:center;
justify-content:center;

input,button{
    font-size:20px;
    font-family: 'Raleway', sans-serif;
    margin-bottom:13px;
    border-radius: 5px;
    border:none;
    height:58px;
    width:50%;
}
button{
    color:#fff;
    background-color:#A328D6 ;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
}
input::placeholder{
    color:#000;
    padding:10px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
}
h1{
    margin-bottom:24px;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    color:#fff;
}
a{
    margin-top:36px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    color:#fff;
}
`