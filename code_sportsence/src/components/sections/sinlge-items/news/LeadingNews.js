import React from 'react';
import useImageBackgrStyle from '../../../../useImageBackgrStyle';


class LeadingNews extends React.Component {
    render() {
        return(
            <div className="newsSectionsContainer">
                <div className="marginHolder">
                    <p className="newsSectionsTitle">Latest news from today:</p>
                </div>
                <article className="biggestNewsContainer">
                    <div className="articleHeadPart">
                        <a href="#" className="articleImg" style={useImageBackgrStyle('images/solari.jpg')}>
                            <span className="dateBox">25.02.19 - 12:34</span>
                        </a>
                        <div className="titleHolder">
                            <a href="#">
                                <span class="articleTitle">
                                    Praesent sit amet sem sit amet nulla lacinia imperdiet.
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="subTextHolder">
                        <p className="subArticleText">
                            Nulla gravida nunc id dapibus finibus. Aliquam at tempus lorem. Cras auctor ligula et magna posuere vehicula. Nulla sed rutrum arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eu dolor ante. Proin vel neque eget felis gravida pulvinar.
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
                        <a href="#" className="articleImg" style={useImageBackgrStyle('images/cr7.jpg')}>
                            <span className="dateBox">25.02.19 - 12:34</span>
                        </a>
                        <div className="titleHolder">
                            <a href="#">
                                <span className="articleTitle">
                                    Sed euismod tristique mauris. Duis eu mauris sed libero feugiat venenatis. Vivamus sed ipsum tellus. Phasellus ullamcorper cursus orci. Fusce nec magna dui. Nunc tincidunt elit ullamcorper leo rhoncus, a convallis sem mollis.
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="subTextHolder">
                        <p className="subArticleText">
                            Doloribus eum maiores molestias nesciunt officiis, placeat ratione repellendus reprehenderit sint temporibus. Aperiam dolore molestias officia tempora vitae!Blanditiis, consectetur dicta doloribus dolorum, ea eligendi iste iure iusto laborum minus natus non quasi quo recusandae repudiandae tempora veniam. Officiis, repellendus.
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
        );
    }
}


export default LeadingNews;