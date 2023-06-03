import logo from './logo.svg';

// import Navbar from "./components/navbar.js";
// import Coverimg from "./components/coverimg.js";
// import Eventlist from "./components/eventLists.js";
// import Footer from "./components/footer.js";

import AdminNavbar from './Admin/components/navbar';
import AdminCoverimg from './Admin/components/coverimg';
import Adminevents from './Admin/components/eventLists';
import Adminfooter from './Admin/components/footer';
function App() {
  const card=[
    {
      title:"Web-hack",
      description:"this the web hackathan asassasasa",
      date:"12/23/2",
      time:"2hr",
      duration:"11:20Am to 12:00Pm ",
      url:"http 123",
    },
    {
      title:"Mobile-hack",
      description:"this the Mobile hackathan",
      date:"12/23/2",
      time:"2hr",
      duration:"11:20Am to 12:00Pm ",
      url:"http 123",
    }
  ]
  return (
    // <>
    //   <Navbar/>
    //   <Coverimg/>
    //   <h2 id='title'>EVENTS</h2>
    //   <br/>
    //   <Eventlist cardlist={card}/>
    //   <br/><br/><br/><br/><br/><br/>
    //   <Footer/>
    //</>
    <>
    <AdminNavbar/>
    <AdminCoverimg/>
    <Adminevents cardlist={card}/>
    <Adminfooter/>
    </>

  );
}

export default App;
