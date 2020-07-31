import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";


function App() {
  return (
    <div className="App">
        <TopNavigation/>
      <TopBanner/>
      <Services/>

    </div>
  );
}

export default App;
