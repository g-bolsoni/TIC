import React, {Component}from 'react'

import Header from '../../MicroPages/Header/header';
import Footer from '../../MicroPages/Footer/Footer'
import Body  from '../../MicroPages/Body/Body'

class OrdemServico extends Component{
    
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div>
                <Header/>
                Ordem De Serviço 
                <Body/>
                <Footer/>
            </div>
        );
    };
};

export default OrdemServico;