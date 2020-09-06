import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


import Cacamba from './pages/Cacamba/index.js';
import Estoque from './pages/Estoque/index'
import OrdemServico from './pages/OrdemServico/index.js';
import Home from './pages/Home/index.js';

const Routes=()=>{
    return(
        <BrowserRouter>
            
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/cacamba' component={Cacamba}/>
                <Route exact path='/ordemServico' component={OrdemServico}/>
                <Route exact path='/estoque' component={Estoque}/>


            </Switch>
        </BrowserRouter>
    );
}
export default Routes;