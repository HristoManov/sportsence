import React from 'react';
import useImageBackgrStyle from '../../../../useImageBackgrStyle';


class SelectedArticle extends React.Component {
    render() {
        return(
            <article className="biggestNewsContainer">
                <div className="articleHeadPart">
                    <a href="#" className="articleImg" style={useImageBackgrStyle('images/edenhazard.jpg')}>
                        <span className="dateBox">25.02.19 - 12:34</span>
                    </a>
                    <div className="titleHolder">
                        <a href="#">
                            <span className="articleTitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate delectus, earum iure minus placeat quisquam sed voluptatem?
                            </span>
                        </a>
                    </div>
                </div>
                <div className="subTextHolder">
                    <p className="subArticleText">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consectetur dicta doloribus dolorum, ea eligendi iste iure iusto laborum minus natus non quasi quo recusandae repudiandae tempora veniam. Officiis, repellendus.
                    </p>
                </div>
                <div className="shareContainer">
                    <a href="#" className="shareItem fb"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="shareItem g"><i className="fab fa-twitter-square"></i></a>
                    <a href="#" className="shareItem tw"><i className="fab fa-google-plus-square"></i></a>
                    <a href="#" className="shareItem vb"><i className="fab fa-viber"></i></a>
                </div>
                <div className="clearfix"></div>
            </article>
        );
    }
}


export default SelectedArticle;