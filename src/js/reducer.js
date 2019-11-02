import { 
    LOGIN_FAILURE,
    LOGIN_SUCCESS, 
    FETCH_NEWS_FAILURE, 
    FETCH_NEWS_LOADING,
    FETCH_NEWS_SUCCESS,
} from './action';

export default (state = { login: false, articles: [] }, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, login: 'success' };
        case LOGIN_FAILURE:
            return { ...state, login: 'failed' };
        case FETCH_NEWS_SUCCESS:
            return { ...state, articles: action.articles };
        case FETCH_NEWS_LOADING:
            return { ...state, articlesStatus: 'loading' };
        case FETCH_NEWS_FAILURE:
            return { ...state, articlesStatus: 'failure' }
        default:
            return state;
    }
} 