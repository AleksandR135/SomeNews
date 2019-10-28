import React from 'react'

export default class MainPage extends React.Component {
    checkAuth() {
        const { history } = this.props;
        history.push('/login') 
    }

    componentDidMount() {
        this.checkAuth()
    }

    render() {
        return 'Hello Bro'
    }
}