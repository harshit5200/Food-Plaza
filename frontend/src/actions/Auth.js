import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const login = (data, callback) => {
    const {email, password, token} = data;


    const body = JSON.stringify({email, password, token})

    axios.post('/api/auth', body, config)
    .then(res => {
        if (res.data.success){
            localStorage.setItem('token', res.data.token)
        }
        if(typeof callback === "function"){
            callback(res)
        }
    })
    .catch(err => console.log(err))
};

export const register = (user, callback) => {
    const {email, firstName, lastName, password, mobileNo, address, city, state, pincode} = user;
    const body = JSON.stringify({email, firstName, lastName, password, mobileNo, address, city, state, pincode})
    axios.post('/api/user', body, config)
    .then(res => {
        if(res.data.success){
            localStorage.setItem('token', res.data.token)
        }
        if(typeof callback === "function"){
            callback(res)
        }
    })
    .catch(err => console.log(err))
}

