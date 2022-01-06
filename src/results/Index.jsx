
import React, { useState, useEffect } from 'react';

import { EpisodeLink } from './EpisodeLink';

//ACTUAL NPM MODULE IMPORT
//import { Parser } from 'podcast-rss-feed-parser'

//DEV ONLY IMPORT
import { Parse } from '../../../podcast-rss-feed-parser/index.js'

function Results(props) {

    const [podcast, setPodcast] = useState("")

    const url = props.location.state.url

    useEffect(() => {
        fetch(`http://localhost:4000/feeds?url=${url}`)
            //DEV ONLY CORS ANYWHERE FETCH
            //fetch(`https://cors-anywhere.herokuapp.com/${url}`)
            .then(response => response.text())
            .then(data => setPodcast(Parse(data)))
    }, []);

    return (
        <div className="p-4">
            <div className="container">
                <h2>RESULTS</h2>
                <a href={podcast.link}>
                    <img style={{ "width": "400px" }} src={podcast.img} />
                </a>
                <h3>{podcast.title}</h3>
                <p>{podcast.description}</p>
                <ul>
                    {podcast.episodes && podcast.episodes.map((result, index) => (
                        <EpisodeLink
                            title={result.title}
                            url={result.url}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export { Results };