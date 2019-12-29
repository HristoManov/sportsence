import React from 'react';
import useImageBackgrStyle from '../../../useImageBackgrStyle';

class FavoriteTeams extends React.Component {
    render() {
        return(
            <ul className="asideBarList favTeams">
                <li className="asideBarTitle">
                    <i className="fas fa-star"></i> Favorite Teams
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/monaco.png')}></span>
                        <span className="itemName">Monaco</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/atleticomadrid.png')}></span>
                        <span className="itemName">Atletico Madrid</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/juventus.png')}></span>
                        <span className="itemName">Juventus</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/liverpool.png')}></span>
                        <span className="itemName">Liverpool</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/napoli.png')}></span>
                        <span className="itemName">Napoli</span>
                    </a>
                    <i className="fas fa-times-circle"></i>
                </li>
            </ul>
        );
    }
}


export default FavoriteTeams;