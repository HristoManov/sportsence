import React from 'react';
import useImageBackgrStyle from '../../../../useImageBackgrStyle'


class News extends React.Component {
    render() {
        return(
            <>
                <section className="leadingSection news">
                    <div className="sectionHeader">
                        <a href="#" className="visitAll"><span>Visit all news </span><i className="fas fa-arrow-circle-right"></i></a>
                        <h3>Leading news</h3>
                    </div>
                    <div className="newsArticles">
                        <article className="newsContainer first">
                            <div className="withReferenceTo">
                                <a href="#"><i className="fas fa-info-circle"></i>Manchester United</a>
                            </div>
                            <div className="articleHolder">
                                <a href="#" className="newsImg" style={useImageBackgrStyle('images/jose.jpg')} >
                                    <span className="dateBox">02.02.19/10:33</span>
                                </a>
                                <a href="#">
                                    <span className="newsHeader">Manchester United lorem ipsum adipisicing sit amet, consectetur.</span>
                                </a>
                            </div>
                        </article>
                        <article className="newsContainer">
                            <div className="withReferenceTo">
                                <a href="#"><i className="fas fa-info-circle"></i>Cristiano Ronaldo</a>
                            </div>
                            <div className="articleHolder">
                                <a href="#" className="newsImg" style={useImageBackgrStyle('images/cr7.jpg')} >
                                    <span className="dateBox">15.02.19/12:44</span>
                                </a>
                                <a href="#">
                                    <span className="newsHeader">Cristiano Ronaldo lorem ipsum dolor sit amet.</span>
                                </a>
                            </div>
                        </article>
                        <article className="newsContainer">
                            <div className="withReferenceTo">
                                <a href="#"><i className="fas fa-info-circle"></i>Eden Hazard</a>
                            </div>
                            <div className="articleHolder">
                                <a href="#" className="newsImg" style={useImageBackgrStyle('images/edenhazard.jpg')} >
                                    <span className="dateBox">24.01.19/13:12</span>
                                </a>
                                <a href="#">
                                    <span className="newsHeader">Eden Hazard consectetur adipisicing elit.</span>
                                </a>
                            </div>
                        </article>
                        <article className="newsContainer fourth">
                            <div className="withReferenceTo">
                                <a href="#"><i className="fas fa-info-circle"></i>Kylian Mbappe</a>
                            </div>
                            <div className="articleHolder">
                                <a href="#" className="newsImg" style={useImageBackgrStyle('images/mbappe.jpg')} >
                                    <span className="dateBox">04.03.19/9:42</span>
                                </a>
                                <a href="#">
                                    <span className="newsHeader">Kylian Mbappe lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                </a>
                            </div>
                        </article>
                        <article className="newsContainer first">
                            <div className="withReferenceTo">
                                <a href="#"><i className="fas fa-info-circle"></i>Lionel Messi</a>
                            </div>
                            <div className="articleHolder">
                                <a href="#" className="newsImg" style={useImageBackgrStyle('images/messi.jpg')} >
                                    <span className="dateBox">27.01.19/8:57</span>
                                </a>
                                <a href="#">
                                    <span className="newsHeader">Leo Messi lorem ipsum adipisicing amet, consectetur sita.</span>
                                </a>
                            </div>
                        </article>
                        <article className="newsContainer">
                            <div className="withReferenceTo">
                                <a href="#"><i className="fas fa-info-circle"></i>Paris-Sait-Germain</a>
                            </div>
                            <div className="articleHolder">
                                <a href="#" className="newsImg" style={useImageBackgrStyle('images/nejmar.jpg')} >
                                    <span className="dateBox">18.01.19/16:45</span>
                                </a>
                                <a href="#">
                                    <span className="newsHeader">Nejmar lorem ipsum vitae pulvinar lacus, consectetur adipisicing.</span>
                                </a>
                            </div>
                        </article>
                        <article className="newsContainer">
                            <div className="withReferenceTo">
                                <a href="#"><i className="fas fa-info-circle"></i>Paul Pogba</a>
                            </div>
                            <div className="articleHolder">
                                <a href="#" className="newsImg" style={useImageBackgrStyle('images/paulpogba.jpg')} >
                                    <span className="dateBox">17.01.19/14:18</span>
                                </a>
                                <a href="#">
                                    <span className="newsHeader">Paul Pogba: suscipit purus ac ultricies consequat, metus massa.</span>
                                </a>
                            </div>
                        </article>
                        <article className="newsContainer fourth">
                            <div className="withReferenceTo">
                                <a href="#"><i className="fas fa-info-circle"></i>Real Madrid</a>
                            </div>
                            <div className="articleHolder">
                                <a href="#" className="newsImg" style={useImageBackgrStyle('images/solari.jpg')} >
                                    <span className="dateBox">10.02.19/15:39</span>
                                </a>
                                <a href="#">
                                    <span className="newsHeader">Santiago Solari lorem ipsum sem ante, pharetra nec orci non.</span>
                                </a>
                            </div>
                        </article>
                    </div>
                </section>
                <div className="clearfix"></div>
            </>
        );
    }
}


export default News;