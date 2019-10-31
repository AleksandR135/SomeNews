
const API_KEY = '61986794758848a48b051db401ec6778';

const mapNews = ({ articles }) => {
    return articles.map((article, i) => ({
        ...article,
        id: i,
        source: article.source && article.source.name,
    }))
}

const getRandomNews = () => {
    return fetch('https://newsapi.org/v2/top-headlines?country=us', {
        headers: { 'x-api-key': '61986794758848a48b051db401ec6778' }
    })
    
    .then(response => {
        console.log(response.ok)
        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        return response;
    })
    .then(response => response.json())
    .then(mapNews)
    .then()
    .catch(console.log)
}

export default getRandomNews