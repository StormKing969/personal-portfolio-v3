import React from 'react'
import PortfolioCard from './PortfolioCard'
import PortfolioData from '../../assets/portfolio/PortfolioData'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Popular Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {PortfolioData.map(data => (
          <PortfolioCard 
            key = {data.id}
            image = {data.image}
            title = {data.title}
            github = {data.github}
            demo = {data.demo}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio