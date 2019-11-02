import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';
import { fetchNewsRequest } from '../action';

class MainPage extends React.Component {
    checkAuth() {
        const { history } = this.props;
        history.push('/login') 
    }

    componentDidMount() {
        this.checkAuth();
        this.props.fetchNews();
    }

    render() {
        console.log(this.props);
        if (this.props.articlesStatus === 'ERROR') {
            return 'Something went wrong';
        }
        
        if (this.props.articlesStatus === 'LOADING') {
            return 'Loading...';
        }

        return <main>
            {this.props.articles.map(article => <Article key={article.id} {...article}/>)}
        </main>
    }
}

const mapStateToPros = state => ({
    auth: state.login,
    articles: state.articles,
    articlesStatus: state.articlesStatus,
});

const mapDispatchToProps = (dispatch) => ({
    fetchNews: () => dispatch(fetchNewsRequest()),
})

export default connect(mapStateToPros, mapDispatchToProps)(MainPage);