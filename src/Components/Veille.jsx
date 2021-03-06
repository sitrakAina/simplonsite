import React, { Component } from "react";
import './veille.css';


class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <nav class="nav">
                    <ul>
                        <li><a href="#agile">Méthodes Agiles</a></li>
                        <li><a href="#cryptographie">Cryptographie</a></li>
                        <li><a href="#symétrique">Cryptographie Symétrique</a></li>
                        <li><a href="#asymetrique">Cryptographie Asymétrique</a></li>
                        <li><a href="#canvas">Canvas</a></li>
                        <li><a href="#git">Git</a></li>
                        <li><a href="#wareframe">Wareframe</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-sm-9">
              <div class="container">
                <div class="row">
                  <div id="agile">
                    <h3>Méthodes Agiles</h3>
                    <p>Les méthodes agiles sont des groupes de pratiques de pilotage et de réalisation de projets.
                       Elles ont pour origine le manifeste Agile, rédigé en 2001, qui consacre le terme d'« agile » 
                       pour référencer de multiples méthodes existantes.</p>
                    <p>Les méthodes agiles se veulent plus pragmatiques que les méthodes traditionnelles, 
                      impliquent au maximum le demandeur (client) et permettent une grande réactivité à ses demandes.
                       Elles reposent sur un cycle de développement itératif, incrémental et adaptatif et doivent respecter 
                       quatre valeurs fondamentales déclinées en douze principes desquels découlent une base de pratiques, 
                       soit communes, soit complémentaires.</p>
                  </div>
                  <hr></hr>
                  <div id="cryptographie">
                    <h3>Cryptographie</h3>
                    <p>La machine de Lorenz utilisée par les nazis durant la Seconde Guerre mondiale pour chiffrer les communications 
                      militaires de haut niveau entre Berlin et les quartiers-généraux des différentes armées.
                      La cryptographie est une des disciplines de la cryptologie s'attachant à protéger des messages (assurant confidentialité, 
                      authenticité et intégrité) en s'aidant souvent de secrets ou clés.</p>
                  </div>
                  <hr></hr>
                  <div id="symetrique">
                      <h3>Algorithmes de cryptographie symétrique (à clé secrète)</h3>
                      <p>Les algorithmes de chiffrement symétrique se fondent sur une même clé pour chiffrer et déchiffrer un message. 
                        L'un des problèmes de cette technique est que la clé, qui doit rester totalement confidentielle, doit être transmise au correspondant de façon sûre. 
                        La mise en œuvre peut s'avérer difficile, surtout avec un grand nombre de correspondants car il faut autant de clés que de correspondants.</p>
                        <p>Exemple:</p><ul>
                          <li>DES</li>
                          <li>AES</li>
                          <li>RC4</li>
                          <li>RC5</li>
                          <li>RC5</li>
                          <li>MISTY1</li>
                        </ul>
                  </div>
                  <hr></hr>
                  <div id="asymetrique">
                    <h3>Algorithmes de cryptographie asymétrique (à clé publique et privée)</h3>
                    <p>Pour résoudre le problème de l'échange de clés, la cryptographie asymétrique a été mise au point dans les années 1970. 
                      Elle se base sur le principe de deux clés :</p>
                      <ul>
                          <li>RSA (chiffrement et signature);</li>
                          <li>DSA (signature);</li>
                          <li>Protocole d'échange de clés Diffie-Hellman (échange de clé);RC4</li>
                          <li>et d'autres ; voir cette liste plus complète d'algorithmes de cryptographie asymétrique.</li>
                        </ul>
                  </div>
                  <hr></hr>
                  <div id="canvas">
                      <h3>Canvas (HTML)</h3>
                      <p>L'élément canvas est un composant de HTML qui permet d'effectuer des rendus dynamiques d'images bitmap via des scripts. 
                        Déjà implémenté dans certains navigateurs, il fait partie de la spécification HTML5. Canvas peut également être utilisé 
                        pour mettre en place un moyen de tracking de l'utilisateur sur le site sans avoir à collecter ses données personnelles 
                        grâce au canvas fingerprinting1.</p>
                  </div>
                  <hr></hr>
                  <div id="git">
                    <h3>Git</h3>
                    <p>Git est un logiciel de gestion de versions décentralisé. 
                      C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, 
                      et distribué selon les termes de la licence publique générale GNU version 2. En 2016, 
                      il s’agit du logiciel de gestion de versions le plus populaire qui est utilisé par plus de douze millions de personnes.</p>
                  </div>
                  <hr></hr>
                  <div id="wareframe">
                    <h3>Wireframe (design)</h3>
                    <p>Le wireframe ou maquette fonctionnelle est un schéma utilisé lors de la conception d'une interface pour définir les zones et composants qu'elle doit contenir. 
                      À partir d'un wireframe peut être réalisée l'interface proprement dite par un graphiste. La démarche de recourir à des wireframes s'inscrit dans une recherche d'ergonomie.</p>
                    <p>Elle est surtout utilisée dans le cadre du développement logiciel et des sites et applications Web.</p>
                    <p>Le wireframe consiste concrètement en un croquis, un collage papier ou un schéma numérique</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>     
    );
  }
}
 
export default App;