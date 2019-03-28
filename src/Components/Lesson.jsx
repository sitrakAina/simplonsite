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
                            <li><a href="#html">HTML</a></li>
                            <li><a href="#css">CSS</a></li>
                            <li><a href="#scdc">Java Scrypte</a></li>
                            <li><a href="#scdc">React js</a></li>
                            <li><a href="#scdc">Mongo DB</a></li>
                            <li><a href="#scdc">Node js</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-sm-9">
                   <div class="container">
                        <div class="row">
                            <div id="html">
                                <h3>Le langage HTML</h3>
                                <h4>Définition</h4>
                                <p>HTML est un langage de balisage pour décrire des pages web.</p>
                                <p>HTML est le sigle pour Hyper Text Markup Language (langage de balisage d’hypertexte)</p>

                                <h4>Lecture du code HTML</h4>
                                <p>Les navigateurs Internet (comme Internet explorer, Firefox ou Chrome par exemple) sont capables de lire les documents
                                HTML et de les afficher, sous forme de pages web. Certains éléments, comme les balises html, body, strong etc... ne sont pas
                                affiché sur la page web. Ces éléments donnent des indications au navigateur sur la valeur (ceci est un titre, ceci est un
                                sous titre, ceci est un paragraphe, ceci est une partie importante...) de chaque partie du texte)</p>

                                <h4>Structure de base</h4>
                                <div class="row">
                                    <div class="col-md-5">
                                        <p>La structure de base de tout document HTML est la suivante :</p>
                                    </div>
                                    <div class="col-md-4">
                                        <ul>
                                            <li>!DOCTYPE html</li>
                                            <li>html</li>
                                            <li>head</li>
                                            <li>/head</li>
                                            <li>body</li>
                                            <li>/body</li>
                                            <li>/html</li>
                                        </ul>
                                    </div>
                                </div>
                                <h5>Balise !DOCTYPE html</h5>
                                <p>La toute première ligne s'appelle le doctype. Elle est indispensable car c'est elle qui indique qu'il s'agit bien
                                    d'une page web HTML.
                                    Ce n'est pas vraiment une balise comme les autres (elle commence par un point d'exclamation).</p>
                                    <p>Cette ligne du doctype était autrefois incroyablement complexe. Il était impossible de la retenir de tête.
                                        Pour XHTML 1.0, il fallait écrire :
                                    "(DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-
                                    strict.dtd").
                                    Dans le cadre de HTML5, il a été décidé de la simplifier, pour le plus grand bonheur des webmasters. Quand
                                    vous voyez une balise doctype courte (!DOCTYPE html), cela signifie que la page est écrite en HTML5.</p>
                                
                                <h5>Balise html</h5>
                                <p>Cette balise englobe tout le contenu de la page.</p>

                                <h5>Balise head</h5>
                                <p>Entre les balises head et /head se trouvent des informations supplémentaires, qui n’apparaissent pas directement
                                sur la page, comme par exemple les styles utilisés sur la page, l’encodage des caractères, le nom de l’auteur...
                                Pour que tous les caractères de votre texte s’affichent correctement, il FAUT ajouter :
                                "meta charset="utf-8""
                                pour préciser la table de caractère utilisée .
                                Les informations qui apparaîtront directement sur la page sont écrites entre les balises body et /body</p>
                            </div>
                            <div id="css">
                                <h4>Le Language CSS</h4>
                                <p>CSS (Cascading Style Sheets), permet de choisir la couleur du texte, la police utilisée, la taille du
                                texte, les bordures, le fond... et de faire la mise en page du site (menu à gauche, en-tête calé en
                                haut, etc).</p>
                                <p>Aux débuts du Web, CSS n'existait pas, il n'y avait initialement que le langage HTML. Cependant,
                                les pages HTML commençaient à devenir assez complexes. Il y avait de plus en plus de balises et
                                c'était un joyeux mélange entre le fond et la forme, qui rendait la mise à jour des pages web de plus
                                en plus complexe. C'est pour cela que l'on a créé le langage CSS.</p>
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