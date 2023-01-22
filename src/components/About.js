import React from "react"
import about_img from "../assets/Marius_6.png";
import "../styles/About.css";


const About = () => {
  return (
    <div id="about" className="about">
        <div className="container">
            <img src={about_img} alt="Marius Images"/>
            <div className="col-2">
                <h2>About me</h2>
                <p>2021 habe ich mein Studium in Medizintechnik an der Hochschule Trier erfolgreich abgeschlossen. Im Laufe des Studiums habe ich eine neue Liebe für die Informatik entdeckt und daher ein Zweitstudium im Fach Informatik B.Sc begonnen.</p> 
                <p>Derzeit arbeite ich als Werkstudent bei der BBT-Gruppe im Bereich Applikationen – Klinische Spezialsysteme.</p>
                <button className="button">Explore more</button>
            </div>
        </div>

    </div>
  )
}

export default About