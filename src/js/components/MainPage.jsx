import React from 'react'
import getNews from '../services/getRandomNews'
import { get } from 'https';

export default class MainPage extends React.Component {
    checkAuth() {
        const { history } = this.props;
        //history.push('/login') 
    }

    componentDidMount() {
        this.checkAuth()
        getNews();
    }

    render() {
        return 'Hello Bro'
    }
}