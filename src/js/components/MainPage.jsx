import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';
import { fetchNewsRequest } from '../action';

class MainPage extends React.Component {
    checkAuth() {
        if (this.props.loginStatus === 'SUCCESS') return;
        const { history } = this.props;
        history.push('/login') 
    }

    componentDidMount() {
        this.checkAuth();
        this.props.fetchNews();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.loginStatus !== this.props.loginStatus) {
            this.checkAuth();
        }
    }

    render() {
        if (this.props.articlesStatus === 'ERROR') {
            return 'Something went wrong';
        }
        
        if (this.props.articlesStatus === 'LOADING') {
            return 'Loading...';
        }

        return <main>
            {this.props.articles.slice(0, 5).map(article => <Article key={article.id} {...article}/>)}
        </main>
    }
}

const mapStateToPros = state => ({
    loginStatus: state.loginStatus,
    articles: state.articles,
    articlesStatus: state.articlesStatus,
});

const mapDispatchToProps = (dispatch) => ({
    fetchNews: () => dispatch(fetchNewsRequest()),
})

export default connect(mapStateToPros, mapDispatchToProps)(MainPage);