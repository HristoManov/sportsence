import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import NewsPage from './NewsPage';
import SelectedNewsPage from './SelectedNewsPage';
import history from '../history';


// template:
// const App = () => {
//     return (
//         <div className="ui container">
//             <Router history={history}>
//                 <div>
//                 <Header />
//                     <Switch>
//                         <Route path="/" exact component={StreamList} />
//                         <Route path="/streams/new" exact component={StreamCreate} />
//                         <Route path="/streams/edit/:id" exact component={StreamEdit} />
//                         <Route path="/streams/delete/:id" exact component={StreamDelete} />
//                         <Route path="/streams/:id" exact component={StreamShow} />
//                     </Switch>
//                 </div>
//             </Router>
//         </div>
//     );
// };


// TO DO: /news-single -> /news/:title !!!!!!!!!!!!!

// TO DO: REORGANIZE THE FILE HIERARHCY AT COMPONENTS FOLDER ???
const App = () => {
    return (
        <Router history={history}>
            <div id="site">
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/news" exact component={NewsPage} />
                    <Route path="/news-single" exact component={SelectedNewsPage} />
                    <Route path="/program"/>
                    <Route path="/results"/>
                    <Route path="/vh"/>
                    <Route path="/leagues"/>
                </Switch>
            </div>
        </Router>
    );
};  


export default App;