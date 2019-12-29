import React from 'react';
import SelectedArticle from './sinlge-items/news/SelectedArticle';
import HorizontalAdvertise from './sinlge-items/news/HorizontalAdvertise';
import LeadingNews from './sinlge-items/news/LeadingNews';
import NewsByCountry from './sinlge-items/news/NewsByCountry';




class MainBodySelectedNews extends React.Component {
    render() {
        return(
            <main>
                <div className="mainPageBody">
                    
                <SelectedArticle />
                <HorizontalAdvertise />
                <LeadingNews />
                <NewsByCountry />

                </div>
            </main>
        );
    }
}


export default MainBodySelectedNews;