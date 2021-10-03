import React from "react";
import withComponent from "../with-component/with.component";
import './netflix.styles.css'

import MovieComponent from "../movies/movie.component";

const NetflixOverview = ({data, title, isLargerRow}) => {

    return <div className="row">
         <h1>{title}</h1>
         <div className="row_items">
         {
             data.map( ({id , ...otherProps}) => 
                    <MovieComponent key={id} {...otherProps} isLargerRow={isLargerRow}/>
              )
         }
          </div>
    </div>

}
export default withComponent(NetflixOverview)