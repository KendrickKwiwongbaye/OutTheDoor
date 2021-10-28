
import { Provider } from 'react-redux';
import store from './redux/store';
import './CSS/index.css';
import './CSS/searchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './widgetImages/logo2.png';
import logoImage from './widgetImages/logo2.png';


import Content from './components/Content/Content.js';
import Test from './components/Navbar/test.jsx';
import Search from './components/SearchCars/cars.js';
import SearchInput from './components/SearchCars/carsInput.js';
import Location from './components/Geolocation/Location.js';
import Signup from './components/Signup/Signup';
import chatbot from './components/Chat/chat.js';
import ChatButton from './components/Chat/chatButton.js'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div>
        {/*Logo at the top*/}
        <header> 
          <div>
            <img class="logoImage" src={logoImage}/>
          </div>
        </header>
      </div>

      <div className="bodyR">
        <body>
          <div>

          {/*Files go in here for each component*/}
          <div className="App">
            <Test/>
            <Signup/>
            <Location/>
            <Search/>
            <Content/>
            <ChatButton/>
          </div>
        </div>
        </body>

        
      
      </div>
    </div>
    </Provider>
  );
}



export default App;
