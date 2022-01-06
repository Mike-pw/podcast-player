
import React, { useState, useEffect } from 'react';

function Player(props) {

    const url = props.location.state.url

    return (
        <div className="p-4">
            <div className="container">
                <figure>
                    <figcaption>Listen to Episode</figcaption>
                    <audio src={url} controls id="audio">
                    </audio>
                </figure>
            </div>
        </div>
    );
}

export { Player };