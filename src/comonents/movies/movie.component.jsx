import React from "react";
import './movie.styles.css'

import { withRouter } from "react-router";

const baseUrl = "https://image.tmdb.org/t/p/original/"


const MovieComponent = ({isLargerRow, poster_path, backdrop_path, title, history, match, overview}) => {
    return <React.Fragment> 
             <img 
                    src={ isLargerRow ?
                         `${baseUrl}${poster_path}` 
                         : 
                         `${baseUrl}${backdrop_path}`
                        } 
                    
                    alt={title} 
                    onClick = { () => history.push(`${match.url}movies/${title.toLowerCase().replace(/\s/g, "")
                     }`,{overview,
                        poster_path,
                        title, 
                        backdrop_path 
                    })
                    }
                    className={`row_poster  ${isLargerRow ? "row_poster_larger" : null}`
                }
                 />  
        </React.Fragment>
    
}

export default withRouter(MovieComponent)