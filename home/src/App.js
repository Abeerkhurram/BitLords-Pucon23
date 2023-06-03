import logo from './logo.svg';

import Navbar from "./components/navbar.js";
import Coverimg from "./components/coverimg.js";
import Eventlist from "./components/eventLists.js";
import Footer from "./components/footer.js";

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
    <>
      <Navbar/>
      <Coverimg/>
      <h2 id='title'>EVENTS</h2>
      <br/>
      <Eventlist cardlist={card}/>
      <br/><br/><br/><br/><br/><br/>
      <Footer/>
    </>
  );
}

export default App;
