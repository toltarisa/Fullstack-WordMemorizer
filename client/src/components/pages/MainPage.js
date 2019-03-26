import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import Showcase from '../common/Showcase';
class MainPage extends Component {
    render() { 
        return ( 
            <div>
                <Navbar/>
                <Showcase/>
            </div>
         );
    }
}
 
export default MainPage;