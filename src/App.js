import Body from "./components/Body";
import store from "../src/utils/store"
import {Provider} from "react-redux"

function App() {
  return (
  
  <Provider store={store}>  

    <div>
        <Body />  
    </div>

    </Provider>
  );

  
}

export default App;
