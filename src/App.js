import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import RecentsProjects from "./components/RecentsProjects/RecentsProjects";
import Courses from "./components/Courses/Courses";
import Video from "./components/Video/Video";
import ClientReview from "./components/ClientReview/ClientReview";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
    <Summary/>
    <RecentsProjects/>
    <Courses/>
    <Video/>
    <ClientReview/>
    <Footer/>

    </div>
  );
}

export default App;
