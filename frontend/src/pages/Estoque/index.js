import React, {Component}from 'react'

import Header from '../../MicroPages/Header/header';
import Footer from '../../MicroPages/Footer/Footer'

class Estoque extends Component{
    
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div>
            <h5>Estoque</h5> 
            {/*HEADER */}
            <Header/>

            {/*BODY*/}
            <div> 
                <i class="fas fa-jack-o-lantern    "></i>
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Daniel</td>
                            <td>Facciolo</td>
                            <td>danielfacciolo@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>jacobThornton@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>LarryBird@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/*FOOTER */}
            <Footer/>
        </div>
        );
    };
};

export default Estoque;