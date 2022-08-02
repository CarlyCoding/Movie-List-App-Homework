import React, {useState} from "react";
import LinksList from "../components/LinksList";
import LinksForm from "../components/LinksForm";

const LinksBox = () => {

    const [links, setLinks] = useState(
        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]
    );

    const addLink = (submittedLink) => {
        submittedLink.id = Date.now()
        const updatedLinks = [...links, submittedLink];
        setLinks(updatedLinks);
    };


    return (
        <>
        <h1>Upcoming Film Releases for the UK</h1>
        <LinksList links = {links}/>
        <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases!</a>
        <h2>Add your own movie:</h2>
        <LinksForm onMovieSubmit={(movie) => addLink(movie)}/>
        </>
        
    )
};

export default LinksBox;