import React from 'react';


class MainNav extends React.Component {
    render() {
        return (
            <>
                <div className="contentHolder">
                    <div className="burgerMenu">
                        <div className="burgerMenuContainer" >
                            <a className="burgerIcon" href="#"><i className="fas fa-bars"></i></a>
                            <div className="clearfix"></div>
                            <div className="burgerItemsHolder">
                                <ul className="burgerMenuList">
                                    <li><a className="burgerMenuItem selected" href="#"><i className="fas fa-home"></i>Main page</a></li>
                                    <li><a className="burgerMenuItem" href="news.html"><i className="fas fa-newspaper"></i>News</a></li>
                                    <li><a className="burgerMenuItem" href="#"><i className="fas fa-clock"></i>Program</a></li>
                                    <li><a className="burgerMenuItem" href="#"><i className="fas fa-poll-h"></i>Results</a></li>
                                    <li><a className="burgerMenuItem" href="#"><i className="fas fa-flag"></i>Leagues</a></li>
                                    <li><a className="burgerMenuItem" href="#"><i className="fas fa-video"></i>Videos and Highlights</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>

                <header className="centerMainHeader">
                    <div className="contentHolder">
                        <div className="centerMainMenu">
                            <ul>
                                <li><a className="centerMenuItem selected" href="#"><i className="fas fa-home"></i>Main page</a></li>
                                <li><a className="centerMenuItem" href="news.html"><i className="fas fa-newspaper"></i>News</a></li>
                                <li><a className="centerMenuItem" href="#"><i className="fas fa-clock"></i>Program</a></li>
                                <li><a className="centerMenuItem" href="#"><i className="fas fa-poll-h"></i>Results</a></li>
                                <li><a className="centerMenuItem" href="#"><i className="fas fa-flag"></i>Leagues</a></li>
                                <li><a className="centerMenuItem" href="#"><i className="fas fa-video"></i>Videos and Highlights</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </>
        )

    }
}


export default MainNav;