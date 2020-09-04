import React, {Component}from 'react'

import Header from '../../MicroPages/Header/header';
import Footer from '../../MicroPages/Footer/Footer'
import Body  from '../../MicroPages/Body/Body'

class Cacamba extends Component{
    
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div>
                <Header/>
                CACAMBA
                <Body/>
                <Footer/>
            </div>
        );
    };
};

export default Cacamba;