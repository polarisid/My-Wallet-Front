import './assets/reset.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import { AuthProvider } from "./contexts/AuthContext";
export default function App(){
    return(
        <AuthProvider>        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/sign-in" element={<LoginPage/>}/>
                    <Route path="/sign-up" element={<RegisterPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>

        )
}

