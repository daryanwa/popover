import React from 'react'
import style from './Start.module.css'
import food1 from '../../images/poke1.png'
import food2 from '../../images/poke2.png'
import food3 from '../../images/udon.png'

function StartComponent() {
  return (
    <section className={style.sectionContainer}>
    <div className={style.itemContainer}>
     
    
        <div className="textContainer">
          <h1 className={style.hContainer}>
            Be The Fastest In <br />
            Delivery Your <span style={{color: '#FFCB45'}}> Food</span>
          </h1>
          <p className={style.describe}>
            Lorem, ipsum dolor sit amet consectetur adipisicing <br/> elit. Nobis at corrupti molestiae.
          </p>
          
          <button className={style.started}>Get Started</button>
           
        </div>
          <div className={style.imgContainer}>
            

            <img className={style.food1} alt='food1' src={food1} />
            <img className={style.food2} alt='food2' src={food2} />
            </div>
            <img className={style.food3} alt='food3' src={food3} />
          <div></div>
  

    </div>
  </section>
  )
}

export default StartComponent