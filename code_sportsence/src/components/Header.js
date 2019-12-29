//template 
// import React from 'react'
// import { Link } from 'react-router-dom';
// import GoogleAuth from './GoogleAuth';


// const Header = () => {
//     return (
//         <div className="ui secondary ponting menu">
//             <Link to="/" className="item">
//                 Streamer!
//             </Link>
//             <div className="right menu">
//                 <Link to="/" className="item">
//                     All streams
//                 </Link>
//                 <GoogleAuth />
//             </div>
//         </div>
//     );
// };  


// export default Header;

import React from 'react';
import MainNav from './MainNav';


class Header extends React.Component {

    render() {
        return(
            <div className="mainHeader">
                
                <header className="topMainHeader">
					<div className="contentHolder">
						<div className="topMainMenu">
							<ul>
								<li><a href="#">About us</a></li>
								<li><a href="#">Contacts</a></li>
							</ul>
						</div>
						<h1>Sport Sence!</h1>
					</div>
					<div className="clearfix"></div>
				</header>
                
                <MainNav />

            </div>
        )
    }

};


export default Header;
