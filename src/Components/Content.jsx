import React, { Component } from "react";
import './content.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Content extends Component {
  render() {
    return (
        <div>
			<div id="fh5co-hero" class="js-fullheight">
                <div class="flexslider js-fullheight">
                    <div class="inner">
                        <h1>Simplon: <span>slogan slogan slogan<br />
                        site simplon madagascar</span></h1>
                        <button class="btn btn-secondary">Get started</button>
                    </div>
                </div>
            </div>
            <div id="fh5co-services" class="fh5co-bg-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-3 text-center">
                            <div class="feature-center animate-box" data-animate-effect="fadeIn">
                                <span class="icon">
                                   
                                </span>
                                <h3>Mongo DB</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                <p><a href="#more" class="btn btn-primary btn-outline">Learn More</a></p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 text-center">
                            <div class="feature-center animate-box" data-animate-effect="fadeIn">
                                <span class="icon">
                                    
                                </span>
                                <h3>Express js</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                <p><a href="#more" class="btn btn-primary btn-outline">Learn More</a></p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 text-center">
                            <div class="feature-center animate-box" data-animate-effect="fadeIn">
                                <span class="icon">
                                    
                                </span>
                                <h3>React js</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                <p><a href="#more" class="btn btn-primary btn-outline">Learn More</a></p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 text-center">
                            <div class="feature-center animate-box" data-animate-effect="fadeIn">
                                <span class="icon">
                                   
                                </span>
                                <h3>Node js</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                <p><a href="#more" class="btn btn-primary btn-outline">Learn More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
        
    );
  }
}
 
export default Content;
