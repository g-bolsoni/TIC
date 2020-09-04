import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


import Cacamba from './pages/Cacamba/index.js'
import Home from './pages/Home/index.js'

const Routes=()=>{
    return(
        <BrowserRouter>
            
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/cacamba' component={Cacamba}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;