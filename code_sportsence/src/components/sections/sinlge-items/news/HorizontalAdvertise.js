import React from 'react';
import useImageBackgrStyle from '../../../../useImageBackgrStyle';


// visible only on smaller screens / mobile (when the asidebar is hidden)
class HorizontalAdvertise extends React.Component {
    render() {
        return(
            <div className="advBodyHolder">
                <div className="marginHolder">
                    <div className="advContainer body">
                        <div className="titleHolder"><a href="#" className="title"><span>Find all you need in our sport store!</span></a></div>
                        <div className="slider">
                            <div>
                                <a className="bannerImg" href="#" style={useImageBackgrStyle('img/swimming.jpeg')}></a>
                                <span className="bannerTitle">Swimming</span>
                            </div>
                            <div>
                                <a className="bannerImg" href="#" style={useImageBackgrStyle('img/fitness.jpeg')}></a>
                                <span className="bannerTitle">Fitness</span>
                            </div>

                            <div>
                                <a className="bannerImg" href="#" style={useImageBackgrStyle('img/football.jpeg')}></a>
                                <span className="bannerTitle">Football</span>
                            </div>

                            <div>
                                <a className="bannerImg" href="#" style={useImageBackgrStyle('img/bikes.jpeg')}></a>
                                <span className="bannerTitle">Cycling</span>
                            </div>

                            <div>
                                <a className="bannerImg" href="#" style={useImageBackgrStyle('img/tennis.jpeg')}></a>
                                <span className="bannerTitle">Tennis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HorizontalAdvertise;
