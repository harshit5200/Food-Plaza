import React, {Component} from 'react';
import AuthContextProvider from './context/AuthContext';
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
    state = {}
    render(){
        return(
            <AuthContextProvider>
                <Routes />
            </AuthContextProvider>
        );
    }
}

export default App;