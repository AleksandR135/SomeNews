import React from 'react'

export default function Article(props) {
    console.log('props', props)
    return <div>
        <div>{props.author}</div>
        <div>{props.content}</div>
        <div>{props.description}</div>
        <div>{props.source}</div>
        <div>{props.title}</div>
    </div>
}