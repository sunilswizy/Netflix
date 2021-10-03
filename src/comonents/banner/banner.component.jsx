import React from "react";
import withComponent from "../with-component/with.component";

import './banner.styles.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"


const BannerComponent = ({data}) =>{ 
    const { title, backdrop_path, original_name, name, overview} = data
    const sliceDes = overview ? overview.slice(0,150) : null 
        return <header className="banner" style={{
            backgroundImage:`url(${baseUrl}${backdrop_path})`,
            backgroundSize:"cover",
            backgroundPosition:"center center" 
        }}>
        {
               <div className="banner_contents">
                    <h1 className="banner_title">{title || original_name || name }</h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <h3 className="banner_description">{sliceDes}</h3>
                </div>
        }
        <div className="fade__bottom"></div>
    </header>
}

export default  withComponent(BannerComponent)