import fetchNews from './services/fetchNews'; 
import login from './services/login'
import { 
    FETCH_NEWS_REQUEST, 
    fetchNewsSuccess,
    fetchNewsFailure,
    LOGIN_REQUEST,
    fetchNewsLoading,
    loginSuccess,
    loginFailure,
} from './action.js';
import { saveToken } from './services/localStorage';

export const requestMiddleware = ({ dispatch }) => next => action => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST: {
            dispatch(fetchNewsLoading());
            fetchNews()
                .then(articles => dispatch(fetchNewsSuccess(articles)))
                .catch(() => dispatch(fetchNewsFailure()));            
            break;
        }     
        case LOGIN_REQUEST: {
            login(action.payload)
                .then(() => {
                    dispatch(loginSuccess())
                    saveToken('SUCCESS');
                })
                .catch(() => dispatch(loginFailure()));
            break;
        }
        default: 
            next(action);
    }
}