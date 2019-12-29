import React from 'react';
import AsideBarNews from './asidebar/AsideBarNews';
import MainBodySelectedNews from './sections/MainBodySelectedNews';


class SelectedNewsPage extends React.Component {
    render() {
        return(
            <div className="newsPageAll">

                <div className="contentHolder">

                    <div className="bodyContainer">

                        <div className="bodyTopMarginHolder"></div>

                        <AsideBarNews />
                        <MainBodySelectedNews />

                        <div className="clearfix"></div> 

                    </div>

                </div>

            </div>
        )
    }
}


export default SelectedNewsPage;