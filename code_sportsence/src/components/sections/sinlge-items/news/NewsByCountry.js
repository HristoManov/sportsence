import React from 'react';
import useImageBackgrStyle from '../../../../useImageBackgrStyle';


class NewsByCountry extends React.Component {
    render() {
        return(
            <>
                <div className="newsSectionsContainer">
                    <div className="marginHolder">
                        <p className="newsSectionsTitle">News from your country:</p>
                    </div>
                    <article className="biggestNewsContainer">
                        <div className="articleHeadPart">
                            <a href="#" className="articleImg" style={useImageBackgrStyle('images/paulpogba.jpg')}>
                                <span className="dateBox">25.02.19 - 12:34</span>
                            </a>
                            <div className="titleHolder">
                                <a href="#">
                                    <span className="articleTitle">
                                        Delectus modi nobis soluta. Alias id laudantium possimus quidem quod ratione sapiente!
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="subTextHolder">
                            <p className="subArticleText">
                                Blanditiis, consectetur dicta doloribus dolorum, ea eligendi iste iure iusto laborum minus natus non quasi quo recusandae repudiandae tempora veniam. Officiis, repellendus.
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

                    <article className="biggestNewsContainer">
                        <div className="articleHeadPart">
                            <a href="#" className="articleImg" style={useImageBackgrStyle('images/messi.jpg')}>
                                <span className="dateBox">25.02.19 - 12:34</span>
                            </a>
                            <div className="titleHolder">
                                <a href="#">
                                    <span className="articleTitle">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate delectus, earum iure minus placeat quisquam sed voluptatem? Delectus modi nobis soluta. Alias id laudantium possimus quidem quod ratione sapiente!
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
                </div>
                {/* <div className="newsSectionsContainer">
                    <div className="marginHolder">
                        <p className="newsSectionsTitle">Can not find what you need here?</p>
                        <article className="biggestNewsContainer">
                            <div className="articleHeadPart">
                                <div className="titleHolder">
                                    <a href="#">  
                                        <span className="articleTitle">
                                            <span>Visit all news <i className="fas fa-arrow-circle-right"></i></span>                                           
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </article>
                    </div>
                </div> */}
                <div className="clearfix"></div>
            </>
        );
    }
}


export default NewsByCountry;