import React from 'react';
import Practice from '../components/Practice';

const Home = (props) => {
    const { myMode, showAlert } = props
    return (
        <>
            <Practice Heading="Enter the Text" myMode={myMode} showAlert={showAlert} />
        </>
    )
}

export default Home;