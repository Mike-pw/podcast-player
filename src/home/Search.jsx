import React, { useState } from 'react';

import { TitleLink } from './TitleLink';

function Search() {

    const [inputValue, setInputValue] = useState("")
    const [showDisplay, setShowDisplay] = useState(false)
    const [podcastList, setPodcastList] = useState("")

    function displayPodcasts(e, input) {
        e.preventDefault()
        fetch(`https://itunes.apple.com/search?term=${input}&entity=podcast`)
            .then(response => response.json())
            //.then(data => console.log(data))
            .then(data => setPodcastList(data.results))
            .then(() => setShowDisplay(true))
    }

    return (
        <>
            <form id="form"
                onSubmit={(e) => displayPodcasts(e, inputValue)}
            >
                <label htmlFor="search-input">
                    <input
                        name="search-input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    >
                    </input>
                </label>
                <button>Submit form</button>
            </form>
            {showDisplay &&
                <div>
                    <h3>Select Podcast</h3>
                    <ul>
                        {podcastList && podcastList.map((result, index) => (
                            <TitleLink title={result.collectionCensoredName} url={result.feedUrl} image={result.artworkUrl100} />
                        ))}
                    </ul>
                </div>
            }
        </>
    );
}

export { Search };