import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Lesson from './Components/Lesson';
import Veille from './Components/Veille';
import Contact from './Components/Contact';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
        <nav className="fh5co-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div class="col-md-3 col-xs-2">
                            <div id="fh5co-logo"><a href="index.html">Mada Simplon</a></div>
                        </div>
                        <div class="col-md-6 col-xs-6 text-center menu-1">
                            <ul>
                                <li class="has-dropdown"><Link to="/">Acceuil</Link></li>
                                <li><Link to="/Lesson">Lesson</Link></li>
                                <li class="has-dropdown"><Link to="/Veille">Veille Techno</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-xs-4 text-right hidden-xs menu-2">
                            <ul>
                                <li class="search">
                                    <div class="input-group">
                                        <input type="text" placeholder="Search.."/>
                                        <span class="input-group-btn">
                                            <button class="btn btn-primary" type="button"><i class="icon-search"></i></button>
                                        </span>
                                    </div>
                                </li>
                                <li class="shopping-cart"><a href="#search" class="cart"><span><i class="icon-shopping-cart"></i></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </nav>
            <switch>
                <Route exact path="/" component={App} />
                <Route path="/Lesson" component={Lesson} />
                <Route path="/Veille" component={Veille} />
                <Route path="/Contact" component={Contact} />
            </switch>
        </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
