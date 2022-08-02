import React from "react";

const Link = ({ name, children }) => {

    return(
        <>
            {/* <h4>{children}</h4>
            <p>{name}</p> */}
            <li><a href={children}>{name}</a></li>
            {/* children=url */}
        </>
    )
};


export default Link;