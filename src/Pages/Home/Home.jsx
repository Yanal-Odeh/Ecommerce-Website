import React from 'react'
import style from './Home.module.css'
import leftImage from '../../Images/left_column.png';
import rightImage from '../../Images/right_column.png';
import leftImageAbout from '../../Images/left_column_about.png';




function Home() {
  return (
    <main>
      <section className={style.welcome}> 
        <div className={style.backGroundPics}>
      <div className={style.leftColumn}
      style={{ backgroundImage: `url(${leftImage})` }}></div>
      <div className={style.rightColumn}
      style={{ backgroundImage: `url(${rightImage})` }}></div>
      </div>
      <div className={style.container}>

        <h1>Explore Fashion-Forward Picks</h1>
        <div className={style.containerBottom}>
          <p>Discover unique, fashion-forward accessories that elevate every outfit. Shop timeless staples and statement pieces curated just for you!</p>
          <button className={style.button}>Shop Now</button>
        </div>
        
      </div>
      
      </section>
    
      <section className={style.about}>
        <div className={style.leftColumnAbout}
        style={{ backgroundImage: `url(${leftImageAbout})` }}></div>
        <div className={style.rightColumnAbout}>

          <h2>About D. Patel</h2>
          <div className={style.story}>
            <h4>Our Story</h4>
            <p>At D. Patel, we source the most unique and stylish accessories to complement your look. Our collection reflects a blend of artistry and elegance, showcasing pieces that make a statement.</p>
          </div>
          <div className={style.mission}>
            <h4>Our Mission</h4>
            <p>We are dedicated to curating accessories that are not only fashionable but also support local artists and ethical brands. Your purchase at D. Patel contributes to a sustainable and vibrant fashion community.</p>
          </div>
          <button>Learn More</button>


        </div>
        
        
       

      </section>

    </main>
  )
}

export default Home