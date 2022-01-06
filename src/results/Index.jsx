
import React, { useState, useEffect } from 'react';

function Results(props) {

    const [text, setText] = useState("")

    const url = props.location.state.url

    useEffect(() => {
        fetch(`http://localhost:4000/feeds?url=${url}`)
            //DEV ONLY CORS ANYWHERE FETCH
            //fetch(`https://cors-anywhere.herokuapp.com/${url}`)
            .then(response => response.text())
            .then(data => setText(data))
    }, []);

    return (
        <div className="p-4">
            <div className="container">
                <h3>RESULTS</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}

export { Results };