import React from 'react';
import AsideBarNews from './asidebar/AsideBarNews';


class NewsPage extends React.Component {
    render() {
        return(
            <div className="newsPageAll">

                <div className="contentHolder">

                    <div className="bodyContainer">

                        <div className="bodyTopMarginHolder"></div>

                        <AsideBarNews />

                        <div className="clearfix"></div> 

                    </div>

                </div>

            </div>
        )
    }
}


export default NewsPage;