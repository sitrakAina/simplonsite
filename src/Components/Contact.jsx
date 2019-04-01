import React, { Component } from "react";


class App extends Component {
  render() {
    return (
        <div id="fh5co-contact">
		<div class="container">
			<div class="row">
				<div class="col-md-5 col-md-push-1 animate-box">
					
					<div class="fh5co-contact-info">
						<h3>Information</h3>
						<ul>
							<li class="address">Faravohitra Madagascar</li>
							<li class="phone"><a href="tel://1234567920">+ 034 00 000 00 </a></li>
							<li class="email"><a href="mailto:info@simplon.com">info@simplon.com</a></li>
							<li class="url"><a href="http://Simplon.io">Simplon.io</a></li>
						</ul>
					</div>

				</div>
				<div class="col-md-6 animate-box">
					<h3>Entrer en contact</h3>
					<form action="#">
						<div class="row form-group">
							<div class="col-md-6">
								<input type="text" id="fname" class="form-control" placeholder="Nome"/>
							</div>
							<div class="col-md-6"> 
								<input type="text" id="lname" class="form-control" placeholder="Prenom"/>
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<input type="text" id="email" class="form-control" placeholder="votre email"/>
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<input type="text" id="subject" class="form-control" placeholder="votre sujet de message"/>
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Dis quelque chose pour nous"></textarea>
							</div>
						</div>
						<div class="form-group">
							<input type="submit" value="Envoyer" class="btn btn-primary"/>
						</div>

					</form>		
				</div>
			</div>
			
		</div>
	</div>
        
    );
  }
}
 
export default App;
