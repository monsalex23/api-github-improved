import React from "react";

const RepositoryItem = ( { name, fullName, linkToRepo} ) => {

    return(
        <>
        <h2>{name}</h2>
        <h4>{fullName}</h4>
        <a href="https://github.com/monsalex23" target="_blank" rel="noreferrer">{linkToRepo}</a>
        </>
    )
}
export default RepositoryItem;