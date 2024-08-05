import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
// import Sidebar from './Sidebar';
// import Rewards from './Rewards';
// import Donations from './Donations';
// import Logout from './Logout';

const App = () => {
    return (
        <div>
    <Sidebar/>
     <Dashboard/>
        </div>

      
        // <Router>
        //     <div className="app">
        //         <Sidebar />
        //         <Switch>
        //             <Route path="/dashboard">
        //                 <Dashboard />
        //             </Route>
        //             <Route path="/rewards">
        //                 <Rewards />
        //             </Route>
        //             <Route path="/donations">
        //                 <Donations />
        //             </Route>
        //             <Route path="/logout">
        //                 <Logout />
        //             </Route>
        //         </Switch>
        //     </div>
        // </Router>
    );
};

export default App;
