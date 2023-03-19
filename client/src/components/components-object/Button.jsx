import React from 'react';

const Button = ({ type, name, link, id }) => {

    let styleClass = `standard-btn `;
    function isEmpty(str) {
        return (!str || str.length === 0);
    }

    switch (type) {

        case 'vote':
            styleClass += "vote--btn";
            break;

        case 'primaryOrange':
            styleClass += "primaryOrange--BTN";
            break;

        default:
            break;
    }

    return (
        isEmpty(link) ? <button id={id} className={styleClass}> {name} </button>
                      : <a href={link} className={styleClass}>{name}</a>
    )
}
export default Button