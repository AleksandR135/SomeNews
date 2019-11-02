import React from 'react'

export default function Article(props) {
    console.log('props', props)
    return <a className='article' href={props.url}>
        <h2 className='article__title'>{props.title}</h2>
        <div className='article__content'>
            <div className='article__imgBlock'>
                <img className='article__poster' src={props.urlToImage} alt=''/>
            </div>
            <div className='article__description'>{props.description}</div>
        
        </div>
        <cite className='article__source'>{props.source}</cite>
    </a>
}