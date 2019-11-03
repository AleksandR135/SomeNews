const API_KEY = '61986794758848a48b051db401ec6778';

const mapNews = ({ articles }) => {
    return articles.map((article, i) => ({
        ...article,
        id: i,
        source: article.source && article.source.name,
    }))
}

const fetchNews = () => {
    return fetch('https://newsapi.org/v2/top-headlines?country=us', {
        headers: { 'x-api-key': API_KEY }
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        return response;
    })
    .then(response => response.json())
    .then(mapNews)
}

export default fetchNews;