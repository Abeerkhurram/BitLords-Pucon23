import logo from './logo.svg';

import Navbar from "./components/navbar.js";
import Coverimg from "./components/coverimg.js";
import Eventlist from "./components/eventLists.js";


function App() {
  const card=[
    {
      title:"Web-hack",
      description:"this the web hackathan",
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
      <Eventlist cardlist={card}/>
    </>
  );
}

export default App;
