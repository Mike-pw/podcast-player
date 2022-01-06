import React from 'react';
import { Link } from 'react-router-dom'

function EpisodeLink({ title, url }) {


    //function selectPodcast
    return (
        <Link
            to={{
                pathname: "/player",
                state: { url: url }
            }}>
            <li
                style={{ listStyleType: "none" }}
            >
                {title}
            </li>
        </Link>
    )
}

export { EpisodeLink };