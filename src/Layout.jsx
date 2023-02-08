import './styles.css';
        //  "Enrutador" 
import { BrowserRouter, 
    // ruta individual, hijo de routes  
        Route,     
    // "Padre" de "Route" -> envuelve todas las rutas        
        Routes}     from "react-router-dom";

import Landing from './page/Landing';
import Pokedex from './page/Pokedex';




function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing/>} path="/" />
        <Route element={<Pokedex/>} path="/pokedex" />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
