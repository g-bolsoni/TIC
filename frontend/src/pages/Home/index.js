import React, {Component}from 'react'

import Header from '../../MicroPages/Header/header';
import Footer from '../../MicroPages/Footer/Footer'
import Body  from '../../MicroPages/Body/Body'

class Home extends Component{
    
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    };
};

export default Home;