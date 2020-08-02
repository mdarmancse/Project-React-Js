import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";


function App() {
  return (
    <div className="App">
        <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
    <Summary/>

    </div>
  );
}

export default App;
