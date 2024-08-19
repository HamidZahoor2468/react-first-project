import React from 'react'

export default function TextForm(props) {
    return (
        <div style={{ backgroundColor: props.myMode === 'light' ? 'white' : '#041f3a', color: props.myMode === 'light' ? 'black' : 'white' }} className='myDiv container'>
            <h1>Hello World</h1>
        </div>
    )
}