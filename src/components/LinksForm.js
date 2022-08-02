import React, {useState} from "react";

const LinksForm = ({onMovieSubmit}) => {
    const [movie, setMovie] = useState("");
    const [url, setUrl] = useState("");

    const handleMovieChange = (event) => {
        setMovie(event.target.value)
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const movieToSubmit = movie.trim();
        const urlToSubmit = url.trim();

        if (!movieToSubmit || !urlToSubmit){
            return
        };

        onMovieSubmit({
            movie: movieToSubmit,
            url: urlToSubmit
        });

        setMovie("");
        setUrl("");


    }



    return(
        <form className="movie-form" onSubmit={handleFormSubmit}>
            <input
            type="text"
            placeholder="Movie Name"
            value= {movie}
            onChange={handleMovieChange}
            />
            <input
            type="text"
            placeholder="Url"
            value={url}
            onChange={handleUrlChange}
            />
            <input type="submit" value="Post"/>
        </form>
    )
}


export default LinksForm;