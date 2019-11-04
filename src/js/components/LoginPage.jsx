import React from 'react';
import { loginRequest } from '../action';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
    state = {
        login: '',
        password: '',
    }

    checkAuth() {
        const { loginStatus, history } = this.props;
        if (loginStatus === 'SUCCESS') {
            history.push('/');
        }
    }

    componentDidMount() {
        this.checkAuth();
    }

    componentDidUpdate() {
        this.checkAuth();
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
        const { login, password } = this.state;

        return (
            <div className='login__wrapper'>
                <div className='login__form'>
                    <h2>Please Log In</h2>
                    {this.props.loginStatus === 'ERROR' && (
                        <span className='login__errorMessage'>
                            'Login or password are incorrect'
                        </span>
                    )}
                    <input 
                        name='login' 
                        onChange={this.handleLoginChange} 
                        value={login}
                        className='login__input'
                        placeholder='Enter your login'
                    />
                    <input
                        name='password'
                        type='password'
                        onChange={this.handlePasswordChange}
                        value={password}
                        className='login__input'
                        placeholder='Enter your password'
                    />
                    <button 
                        className='login__button'
                        onClick={this.handleSubmit}
                    >
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ loginStatus }) => ({ loginStatus });

const mapDispathToProps = (dispatch) => ({
    login: (authData) => dispatch(loginRequest(authData)),
});

export default connect(mapStateToProps, mapDispathToProps)(LoginPage);