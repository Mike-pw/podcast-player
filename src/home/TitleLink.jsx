import React from 'react';
import { Link } from 'react-router-dom'

function TitleLink({ url, title, image }) {

    //function selectPodcast
    return (
        <Link
            to={{
                pathname: "/results",
                state: { url: url }
            }}>
            <li
                style={{ listStyleType: "none" }}
            >

                <img
                    src={image}
                    style={{ paddingRight: 10 }}
                />
                {title}
            </li>
        </Link>
    )
}

export { TitleLink };