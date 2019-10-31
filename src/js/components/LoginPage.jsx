import React from 'react';

export default class LoginPage extends React.Component {
    state = {
        login: 'ABC',
        password: '12345',
    }

    handleLoginChange = () => {

    }

    handlePasswordChange = () => {
        
    }

    render() {
        return (
            <>
                <input 
                    name='login' 
                    onChange={this.handleLoginChange} 
                    value={this.state.login}
                />
                <input
                    name='password'
                    type='password'
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                />
            </>
        )
    }
}