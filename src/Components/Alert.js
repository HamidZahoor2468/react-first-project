import React from 'react';

export default function Alert(props) {
    const msg = props.myAlert?.msg
    const type = props.myAlert?.type

    // const capitalize = (word) => {
    //     if (!word) return ''; // Return an empty string if the word is undefined or null
    //     const lowerChar = word.toLowerCase();
    //     return lowerChar.charAt(0).toUpperCase() + lowerChar.slice(1);
    // }

    return (
        (type && msg) &&
        <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
            {/* <strong>{capitalize(props.myAlert.type)}</strong>: {props.myAlert.msg} */}
            <strong style={{ textTransform: 'capitalize' }}>{type}</strong>: {msg}
        </div>
    );
}