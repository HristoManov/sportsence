import React from 'react';
import FavoriteLeagues from './homepage/FavoriteLeagues';
import FavoriteTeams from './homepage/FavoriteTeams';
import TopRankedTeams from './homepage/TopRankedTeams';


class AsideBar extends React.Component {
    render() {
        return(
            <aside className="mainAsideBar">
                <FavoriteLeagues />
                <FavoriteTeams />
                <TopRankedTeams />
            </aside>
        );
    }
}


export default AsideBar;