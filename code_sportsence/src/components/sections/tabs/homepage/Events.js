import React from 'react';
import useImageBackgrStyle from '../../../../useImageBackgrStyle'


class Events extends React.Component {
    render() {
        return(

            <>
                <section className="leadingSection events">
                    <div className="sectionHeader">
                        <a href="#" className="visitAll"><span>See the full program </span><i className="fas fa-arrow-circle-right"></i></a>
                        <h3>Events</h3>
                    </div>

                    <div className="eventBoxes">
                        <div className="eventsContainer first">
                            <div className="aboutTheEvent">
                                <div className="eventReleaseInfo">Spain: LaLiga - 15.02.19</div>
                                <div className="eventRunTimeInfo">Finished</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="aboutTheEventTeams">
                                <div className="teamHost">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/realmadrid.png')}></div>
                                        <div className="teamName">Real Madrid</div>
                                    </div>
                                    <div className="eventsResult">1</div>
                                </div>
                                <div className="teamGuest">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/barcelona.png')}></div>
                                        <div className="teamName">Barcelona</div>
                                    </div>
                                    <div className="eventsResult">1</div>
                                </div>
                                <span className="eventDash">-</span>
                            </div>
                        </div>

                        <div className="eventsContainer">
                            <div className="aboutTheEvent">
                                <div className="eventReleaseInfo">Portugal: Primeira Liga - 16.02.19</div>
                                <div className="eventRunTimeInfo">Finished</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="aboutTheEventTeams">
                                <div className="teamHost">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/porto.png')}></div>
                                        <div className="teamName">Porto</div>
                                    </div>
                                    <div className="eventsResult">0</div>
                                </div>
                                <div className="teamGuest">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/benfica.png')}></div>
                                        <div className="teamName">Benfica</div>
                                    </div>
                                    <div className="eventsResult">2</div>
                                </div>
                                <span className="eventDash">-</span>
                            </div>
                        </div>

                        <div className="eventsContainer first">
                            <div className="aboutTheEvent">
                                <div className="eventReleaseInfo">England: Premier League - 16.02.19</div>
                                <div className="eventRunTimeInfo running">57'</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="aboutTheEventTeams">
                                <div className="teamHost">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/tottenham.png')}></div>
                                        <div className="teamName">Tottenham</div>
                                    </div>
                                    <div className="eventsResult">2</div>
                                </div>
                                <div className="teamGuest">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/arsenal.png')}></div>
                                        <div className="teamName">Arsenal</div>
                                    </div>
                                    <div className="eventsResult">1</div>
                                </div>
                                <span className="eventDash">-</span>
                            </div>
                        </div>

                        <div className="eventsContainer">
                            <div className="aboutTheEvent">
                                <div className="eventReleaseInfo">Italy: Seria A - 16.02.19</div>
                                <div className="eventRunTimeInfo running">half time</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="aboutTheEventTeams">
                                <div className="teamHost">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/juventus.png')}></div>
                                        <div className="teamName">Juventus</div>
                                    </div>
                                    <div className="eventsResult">1</div>
                                </div>
                                <div className="teamGuest">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/inter.png')}></div>
                                        <div className="teamName">Inter</div>
                                    </div>
                                    <div className="eventsResult">0</div>
                                </div>
                                <span className="eventDash">-</span>
                            </div>
                        </div>

                        <div className="eventsContainer first">
                            <div className="aboutTheEvent">
                                <div className="eventReleaseInfo">France: Ligue 1 - 16.02.19</div>
                                <div className="eventRunTimeInfo running">12'</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="aboutTheEventTeams">
                                <div className="teamHost">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/psg.png')}></div>
                                        <div className="teamName">Paris-Saint-Germain</div>
                                    </div>
                                    <div className="eventsResult">0</div>
                                </div>
                                <div className="teamGuest">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/monaco.png')}></div>
                                        <div className="teamName">Monaco</div>
                                    </div>
                                    <div className="eventsResult">0</div>
                                </div>
                                <span className="eventDash">-</span>
                            </div>
                        </div>

                        <div className="eventsContainer">
                            <div className="aboutTheEvent">
                                <div className="eventReleaseInfo">France: Ligue 1 - 17.02.19</div>
                                <div className="eventRunTimeInfo">Starts at 18:30</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="aboutTheEventTeams">
                                <div className="teamHost">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/lion.png')}></div>
                                        <div className="teamName">Olympic Lion</div>
                                    </div>
                                    <div className="eventsResult"></div>
                                </div>
                                <div className="teamGuest">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/montpellier.png')}></div>
                                        <div className="teamName">Montpellier</div>
                                    </div>
                                    <div className="eventsResult"></div>
                                </div>
                                <span className="eventDash">-</span>
                            </div>
                        </div>

                        <div className="eventsContainer first">
                            <div className="aboutTheEvent">
                                <div className="eventReleaseInfo">Spain: LaLiga - 17.02.19</div>
                                <div className="eventRunTimeInfo">Starts at 19:30</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="aboutTheEventTeams">
                                <div className="teamHost">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/atleticomadrid.png')}></div>
                                        <div className="teamName">Atletico Madrid</div>
                                    </div>
                                    <div className="eventsResult"></div>
                                </div>
                                <div className="teamGuest">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/sevilla.png')}></div>
                                        <div className="teamName">Sevilla</div>
                                    </div>
                                    <div className="eventsResult"></div>
                                </div>
                                <span className="eventDash">-</span>
                            </div>
                        </div>

                        <div className="eventsContainer">
                            <div className="aboutTheEvent">
                                <div className="eventReleaseInfo">England: Premier League - 15.02.19</div>
                                <div className="eventRunTimeInfo">Starts at 22:00</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="aboutTheEventTeams">
                                <div className="teamHost">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/manchesterunited.png')}></div>
                                        <div className="teamName">Manchester United</div>
                                    </div>
                                    <div className="eventsResult"></div>
                                </div>
                                <div className="teamGuest">
                                    <div className="eventTeams">
                                        <div className="teamImg" style={useImageBackgrStyle('emblems/soccer/liverpool.png')}></div>
                                        <div className="teamName">Liverpool</div>
                                    </div>
                                    <div className="eventsResult"></div>
                                </div>
                                <span className="eventDash">-</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="clearfix"></div>
            </>
        );
    }
}


export default Events;