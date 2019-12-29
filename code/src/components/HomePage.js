import React from 'react';
import AsideBarHome from './asidebar/AsideBarHome';
import MainBodyHome from './sections/MainBodyHome'


class HomePage extends React.Component {
    render() {
        return(
            <div className="contentHolder">

                <div className="bodyContainer">

                    <div className="bodyTopMarginHolder"></div>

                    <AsideBarHome />
                    <MainBodyHome />

                    <div className="clearfix"></div> 
                    
                </div>

            </div>
        );
    }
};


export default HomePage;