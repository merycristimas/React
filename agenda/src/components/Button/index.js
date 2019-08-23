import React from 'react';

export default function Button(props) {
    return (
        <button id="success" class="pure-button">
            {props.text}
        </button>
    );
}