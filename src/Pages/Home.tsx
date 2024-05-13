import React, { useRef } from 'react'
import FooterComponent from '../components/Footer/FooterComponent'
import HeaderComponent from '../components/Header/HeaderComponent'
import StartComponent from '../components/sectionstart/StartComponent'
import MainComponent from '../components/Main/MainComponent'



function Home() {

  let mainRef = useRef(null)

  return (
    <div>
        <section>
          <HeaderComponent />
        </section>

        <StartComponent />
        <section ref={mainRef}  id="main-section">
           <MainComponent />
        </section>
        <FooterComponent />
 
    </div>
  )
}

export default Home