import React, {Component} from 'react';
export const AuthContext = React.createContext();

class AuthContextProvider extends Component{
    state = {
        isAuthenticated: false,
        currentUser: null,
        currentEmail: null,
        currentUserID: null
    }

    login = (res) => {
        if (res.data.success){
            this.setState({
                isAuthenticated: true,
                currentUser: res.data.user.firstName,
                currentEmail: res.data.user.email,
                currentID: res.data.user.id
            })
        }
    }

    logout = () => {
        localStorage.removeItem('token')
        this.setState({
            isAuthenticated: false,
            currentUser: null,
            currentEmail: null,
            currentID: null
        })
        localStorage.removeItem('itemsArray')
        window.location.reload();
    }

    render(){
        return(
            <AuthContext.Provider value = {{
                ...this.state,
                logout: this.logout,
                login: this.login
            }}>
            {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider