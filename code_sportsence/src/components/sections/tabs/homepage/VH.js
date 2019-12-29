import React from 'react';


class VH extends React.Component {
    render() {
        return(
            
            <section className="leadingSection vh">
                <div className="sectionHeader">
                    <a href="#" className="visitAll"><span>Visit all results </span><i className="fas fa-arrow-circle-right"></i></a>
                    <h3>Videos and Highlights</h3>
                </div>
                <div className="vhContainer first">
                    <div className="withReferenceTo"></div>
                    <div className="vhVideoContainer">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Mqohrb-r1aM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="vhDescription">
                        <a href="#">
                            <span className="vhTitle">Real Madrid vs Liverpool 3-1 | HIGHLIGHTS</span>
                        </a>
                    </div>
                </div>
                <div className="vhContainer">
                    <div className="withReferenceTo"></div>
                    <div className="vhVideoContainer">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TitOkLrPfho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="vhDescription">
                        <a href="#">
                            <span className="vhTitle">AC Milan 4-1 Bayern Munich 2006 Champions League Round of 16 All goals & Highlights FHD/1080P</span>
                        </a>
                    </div>
                </div>
                <div className="vhContainer first">
                    <div className="withReferenceTo"></div>
                    <div className="vhVideoContainer">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9_vqalyNuTw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="vhDescription">
                        <a href="#">
                            <span className="vhTitle">Barcelona vs PSG 6-5, Epic Comeback - All Goals and Highlights - UCL 2017</span>
                        </a>
                    </div>
                </div>
                <div className="vhContainer">
                    <div className="withReferenceTo"></div>
                    <div className="vhVideoContainer">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8B9Dh3TQG_A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="vhDescription">
                        <a href="#">
                            <span className="vhTitle">Manchester City vs AS Monaco 6-6 All Goals and Highlights UCL 2017</span>
                        </a>
                    </div>
                </div>
                <div className="clearfix"></div>
            </section>

        );
    }
}


export default VH;