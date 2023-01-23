import React from "react"
import "../styles/Hero.css";
import Typewriter from "typewriter-effect";


const Hero = () => {

  return (
    <div className="hero">
      <div className="content">
        <div className="typewriter">
          <Typewriter 
            options={{
              delay: 60,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("Hello there!").pauseFor(1200).typeString(" My name is Marius and I'm a Software Developer.").start();
            }}
          />
        </div>

      </div>

    </div>
  )
}

export default Hero