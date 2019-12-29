import React from 'react';
import useImageBackgrStyle from '../../../useImageBackgrStyle';

class TopRankedTeams extends React.Component {
    render() {
        return(
            
            <ul className="asideBarList rankedTeams">
                <li className="asideBarTitle">
                    Top Ranked Teams (by UEFA club coefficients)
                </li>

                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/realmadrid.png')}></span>
                        <span className="itemName">Real Madrid</span>
                    </a>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/barcelona.png')}></span>
                        <span className="itemName">Barselona</span>
                    </a>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/bayernmunich.png')}></span>
                        <span className="itemName">Bayern Munich</span>
                    </a>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/atleticomadrid.png')}></span>
                        <span className="itemName">Atletico Madrid</span>
                    </a>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/juventus.png')}></span>
                        <span className="itemName">Juventus</span>
                    </a>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/manchestercity.png')}></span>
                        <span className="itemName">Manchester City</span>
                    </a>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/sevilla.png')}></span>
                        <span className="itemName">Sevilla</span>
                    </a>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/psg.png')}></span>
                        <span className="itemName">Raris Saint-Germain</span>
                    </a>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/porto.png')}></span>
                        <span className="itemName">Porto</span>
                    </a>
                </li>
                <li className="asideBarListItem">
                    <a href="#">
                        <span className="flagHolder" style={useImageBackgrStyle('emblems/soccer/arsenal.png')}></span>
                        <span className="itemName">Arsenal</span>
                    </a>
                    <span className="rankedItemsReit"></span>
                </li>
            </ul>

        );
    }
}


export default TopRankedTeams;