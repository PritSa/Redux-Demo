import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './component/CakeContainer';
import HooksCakeContainer from './component/HooksCakeContainer';
import iceCreamContainer from './component/iceCreamContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      {/* <CakeContainer/> */}
      <HooksCakeContainer/>
      <iceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
