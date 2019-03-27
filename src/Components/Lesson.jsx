import React, { Component } from "react";
import './Lesson.css';


class App extends Component {
  render() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <nav class="nav">
                        <ul>
                            <li><a href="#cdcds">HTML</a></li>
                            <li><a href="#csc">CSS</a></li>
                            <li><a href="#scdc">Java Scrypte</a></li>
                            <li><a href="#scdc">React js</a></li>
                            <li><a href="#scdc">Mongo DB</a></li>
                            <li><a href="#scdc">Node js</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-sm-9">
                   <div></div>
                </div>
            </div>
        </div>
        
    );
  }
}
 
export default App;