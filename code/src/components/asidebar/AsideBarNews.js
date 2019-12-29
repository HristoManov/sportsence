import React from 'react';
import AdvertiseBanner from './newspage/AdvertiseBanner';


class AsideBarNews extends React.Component {
    render() {
        return(
            <aside className="mainAsideBar">
                <AdvertiseBanner />
                <AdvertiseBanner />
                <AdvertiseBanner />
            </aside>
        );
    }
}


export default AsideBarNews;