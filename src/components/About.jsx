import React from 'react'
import "../components/css/About.css"
import { Col } from 'react-bootstrap'

const About = () => {
  return (
    <div >
      <h1 className='tiTulo ' style={{border:"2px solid greenyellow" }}>Nosotros</h1>
      <div className='coluMna foNdo'>
        <h1 className='paLta'>Media Palta</h1>
<p className='parraFo'>Somos Dietética Media Palta. Y somos la opción más rica, saludable y económica en productos naturales. Si cada vez oye hablar más de nosotros es porque desde el año 2018 estamos en permanente expansión.
Nuestros altos estándares de calidad hacen posible que lleguemos a cada local con las más sanas y ricas opciones. Y esa calidad es insuperable cuando, además, llega a cada persona con el mejor precio. Porque para nosotros, un producto saludable lo es más cuando muchas personas pueden acceder a él.
Nuestra visión es seguir enfocados en la permanente apertura de locales, en la rápida reposición de la mercadería, y en todo lo que nos acerque a facilitar ese cambio de vida en quienes lo buscan.</p>

    </div>
    <div className='d-flex justify-content-center foNdo'>
    <img src="https://static.vecteezy.com/system/resources/previews/019/782/601/original/avocado-cartoon-character-free-png.png" className='h-25 w-25 mb-5' alt="palta" />
    </div>
    </div>
  )
}

export default About