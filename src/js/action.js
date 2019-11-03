export const FETCH_NEWS_LOADING = 'FETCH_NEWS_LOADING';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const fetchNewsLoading = () => ({ type: FETCH_NEWS_LOADING });
export const fetchNewsSuccess = (articles) => ({ type: FETCH_NEWS_SUCCESS, articles });
export const fetchNewsFailure = () => ({ type: FETCH_NEWS_FAILURE });
export const fetchNewsRequest = () => ({ type: FETCH_NEWS_REQUEST });
export const loginRequest = ({ login, password }) => ({ type: LOGIN_REQUEST, payload: { login, password } });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = () => ({ type: LOGIN_FAILURE });