import React from 'react';
import { loginRequest } from '../action';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
    state = {
        login: '',
        password: '',
    }

    handleLoginChange = (e) => {
        this.setState({ login: e.target.value }); 
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    handleSubmit = () => {
        const { login, password } = this.state;
        this.props.login({ login, password });
    }

    render() {
        return (
            <div className='login__wrapper'>
                <form className='login__form'>
                    <h2>Please Log In</h2>
                    <input 
                        name='login' 
                        onChange={this.handleLoginChange} 
                        value={this.state.login}
                        className='login__input'
                        placeholder='Enter your login'
                    />
                    <input
                        name='password'
                        type='password'
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        className='login__input'
                        placeholder='Enter your password'
                    />
                    <button 
                        className='login__button'
                        onClick={this.handleSubmit}
                    >
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.login,
});

const mapDispathToProps = (dispatch) => ({
    login: (authData) => dispatch(loginRequest(authData)),
});

export default connect(mapStateToProps, mapDispathToProps)(LoginPage);