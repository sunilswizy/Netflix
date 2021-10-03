import React from "react";
import BannerComponent from "../banner/banner.component";
import { Requests } from "../../api/request-links";
import NetflixOverview from "../netflix-overview/netflix-overview.component";

import './Hompage.styles.css'


const Homepage = () => {
    return  <div className="App">
        <BannerComponent  dataSource={Requests.fetchTrending} banner />
    
        <NetflixOverview title="Now Trending" dataSource={Requests.fetchTrending} isLargerRow  />
        <NetflixOverview title="Netflix Originals" dataSource={Requests.fetchOriginals}/>
        <NetflixOverview title="Animation Movies" dataSource={Requests.fetchAnimaton} />
        <NetflixOverview title="Adventure Movies" dataSource={Requests.fetchAdventure}/>
        <NetflixOverview title="Fantasy Movies" dataSource={Requests.fetchFantasy}/>
        <NetflixOverview title="Horror Movies" dataSource={Requests.fetchHorror}/>
        <NetflixOverview title="Comedy Movies" dataSource={Requests.fetchComedy}/>
        <NetflixOverview title="War Movies" dataSource={Requests.fetchWar}/>
   </div>
}

export default Homepage;