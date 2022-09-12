import React from 'react'
import { useGlobalContext } from './context'
import phone from './images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            explicabo, qui suscipit dolorem delectus iste possimus perferendis
            rerum nulla corporis quasi enim ad. Nam pariatur numquam at, tempora
            voluptas cum!
          </p>
          <btton className='btn'>Star now</btton>
        </article>
        <article className='hero-image'>
          <img src={phone} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
