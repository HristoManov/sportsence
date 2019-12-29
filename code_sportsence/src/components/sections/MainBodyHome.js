import React from 'react';
import News from './tabs/homepage/News';
import Events from './tabs/homepage/Events';
import VH from './tabs/homepage/VH'


class SectionsMainBody extends React.Component {
    render() {
        return(
            <main>
                <div className="mainPageBody">

                    <News />
                    <Events />
                    <VH />
                    
                </div>
            </main>
        );
    }
}


export default SectionsMainBody;