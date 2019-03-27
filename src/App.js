import React, { Component } from "react";
import Menu from './Components/Menu';
import Content from './Components/Content';


class App extends Component {
  render() {
    return (
      <div>
        <div className="flex-row">
            <div className="flex-large">
              <Menu/>
            </div>
            <div className="flex-large">
              <Content/>
            </div>
        </div>
      </div>
        
    );
  }
}
 
export default App;
