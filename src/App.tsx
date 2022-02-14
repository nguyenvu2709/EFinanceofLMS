import React from "react";
import { Routes, Route } from "react-router-dom";
import Loginform from "./Components/Login/Loginform";
import Loginforget from "./Components/Login/Loginforget";


function App(){
    return(
        <div className="App">
            <Routes>
                <Route path="login" element={<Loginform/>} />
                <Route path="forget" element={<Loginforget/>} />
                
            </Routes>
        </div>
    );
}

export default App;