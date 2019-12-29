import React from 'react';
import useImageBackgrStyle from '../../../useImageBackgrStyle';

class FavoriteLeagues extends React.Component {
    

    render() {
        return(
            <ul className="asideBarList favLeagues">

                <li className="asideBarTitle">
                    <i className="fas fa-star"></i> Favorite Leagues
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/national-flags/bg.png')}></span>
                        <span className="itemName">Parva Liga</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/national-flags/england.png')}></span>
                        <span className="itemName">Premier League</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/national-flags/spain.png')}></span>
                        <span className="itemName">LaLiga</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/national-flags/italy.png')}></span>
                        <span className="itemName">Seria A</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/national-flags/germany.png')}></span>
                        <span className="itemName">Bundesliga</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/national-flags/france.png')}></span>
                        <span className="itemName">Ligue 1</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/national-flags/portugal.png')}></span>
                        <span className="itemName">Primeira Liga</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/national-flags/netherlands.png')}></span>
                        <span className="itemName">Eredivisie</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/uefa-nations-league.png')}></span>
                        <span className="itemName">UEFA Nations League</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/leagues/Champions-league.png')}></span>
                        <span className="itemName">Champions League</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/leagues/uefa-europa-league-2016-logo-BDCC44BCBF-seeklogo.com.png')}></span>
                        <span className="itemName">Europa League</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/leagues/uefa-euro-2020.jpg')}></span>
                        <span className="itemName">UERO 2020</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>

            </ul>
        );
    }
}


export default FavoriteLeagues;