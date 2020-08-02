import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import RecentsProjects from "./components/RecentsProjects/RecentsProjects";


function App() {
  return (
    <div className="App">
        <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
    <Summary/>
    <RecentsProjects/>

    </div>
  );
}

export default App;
