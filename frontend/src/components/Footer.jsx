import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div id='arrow'>
      <a href='#navbarTogglerDemo02'><i className="fa-solid fa-arrow-up fa-2xl"></i></a>
      </div>
     <div id='footer'>
        <h2>⭐⭐ Optimized Thoughts ⭐⭐</h2>
        <blockquote>My personal Blog</blockquote>
        <ul>
            <li>
                <a href="https://github.com/Mapur2" target='_blank'><i className="fa-brands fa-github fa-2xl"></i></a>
                <a href="https://www.linkedin.com/in/rupam-modak-a87066251/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in fa-2xl"></i></a>
                <a href="https://mapur2.github.io/new_portfolio/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-user fa-2xl"></i></a>
            </li>
        </ul>
        <p style={{textAlign:'left'}}>By Rupam Modak</p> 
    </div>   
    </>
  )
}

export default Footer
