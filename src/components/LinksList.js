import React from "react";
import Link from "./Link";

const LinksList = ({links}) => {
    const LinkNodes = links.map( link => {
        return(
            <Link name = {link.name} key={link.id}>{link.url}</Link>
        )
    });

return (
    <>
    {LinkNodes}
    </>
)

;}

export default LinksList;