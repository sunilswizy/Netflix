import React from "react";
import { withRouter } from "react-router";

import './movie.styles.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"

const MoviePreview = ({location : {state}}) => {

    const {backdrop_path, title, overview} = state
    const sliceDes = overview ? overview.slice(0,150) : null 


    return <div className="movie-preview" style={{
            backgroundImage: `url(${baseUrl}${backdrop_path})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}>

        <div className="movie-preview_contents">
            <h1 className="movie-preview_title">{title}</h1>
       
        <h3 className="movie-preview_overview">{sliceDes}</h3>
        <div className="movie-preview_buttons">
                <button className="movie-preview_button">Play</button>
                <button className="movie-preview_button">My List</button>
        </div>
        </div>
        <div className="movie__bottom"></div>

        
    </div>
}

export default withRouter(MoviePreview)