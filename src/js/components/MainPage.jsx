import React from 'react'
import getNews from '../services/getRandomNews'
import Article from './Article'

export default class MainPage extends React.Component {
    state = {
        articles: [],
    }
    checkAuth() {
        const { history } = this.props;
        //history.push('/login') 
    }

    componentDidMount() {
        this.checkAuth()
        getNews().then(articles => {
            console.log(articles)
            this.setState({ articles });
        })
    }

    render() {
       
        return <main>
            {this.state.articles.map(article => {
                    return <Article key={article.id} {...article}/>
            })}
        </main>
    }
}