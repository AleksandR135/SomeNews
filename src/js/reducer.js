import { 
    LOGIN_FAILURE,
    LOGIN_SUCCESS, 
    FETCH_NEWS_FAILURE, 
    FETCH_NEWS_LOADING,
    FETCH_NEWS_SUCCESS,
} from './action';

export default (state = { loginStatus: 'NOT_ASKED', articles: [], articlesStatus: 'NOT_ASKED' }, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, loginStatus: 'SUCCESS' };
        case LOGIN_FAILURE:
            return { ...state, loginStatus: 'ERROR' };
        case FETCH_NEWS_SUCCESS:
            return { ...state, articles: action.articles, articlesStatus: 'SUCCESS' };
        case FETCH_NEWS_LOADING:
            return { ...state, articlesStatus: 'LOADING' };
        case FETCH_NEWS_FAILURE:
            return { ...state, articlesStatus: 'ERROR' }
        default:
            return state;
    }
} 