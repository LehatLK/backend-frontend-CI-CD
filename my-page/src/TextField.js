import React, { useState } from 'react';

function TextField() {
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    const handleSearchClick = () => {
        console.log('searching for: ', {text})
    }

    return (
        <div>
            <input
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder='who are you looking for?'
        />
        <button onClick={handleSearchClick}>search</button>
        {/* <p>You are looking for: {text}</p> */}
            </div>
    );
}

export default TextField;