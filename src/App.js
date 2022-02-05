import './assets/reset.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from './pages/Register';
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/sign-in" element={<LoginPage/>}/>
                <Route path="/sign-up" element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
        )
}

