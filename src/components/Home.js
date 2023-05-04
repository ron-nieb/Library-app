import React from "react";
import "../css/Home.css"

function Home() {
    return (
    <div>
        
        <div className="hero" id="home">
        <div className="hero__container">
          <h1 className="hero__heading">Welcome to Mind Benders Book Store</h1>
          <p className="hero__description">"Today a reader, tomorrow a leader."</p> 
          <p className="hero_span"> --Mind Benders Quote--</p>
          <button class="main__btn"><a href="/about">Explore</a></button>
        </div>
    </div>
    </div>
    )
}

export default Home;