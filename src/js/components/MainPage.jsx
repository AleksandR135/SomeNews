import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';
import { fetchNewsRequest } from '../action';

class MainPage extends React.Component {
    checkAuth() {
        const { history } = this.props;
        //history.push('/login') 
    }

    componentDidMount() {
        this.checkAuth();
        this.props.fetchNews();
    }

    render() {
        console.log(this.props);
        return <main>
            {this.props.articles.map(article => {
                    return <Article key={article.id} {...article}/>
            })}
        </main>
    }
}

const mapStateToPros = state => ({
    auth: state.login,
    articles: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
    fetchNews: () => dispatch(fetchNewsRequest()),
})

export default connect(mapStateToPros, mapDispatchToProps)(MainPage);