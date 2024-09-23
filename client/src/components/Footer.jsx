import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footer_catagories'>
        <li><Link to="/posts/catagories/Technology">Technology</Link></li>
        <li><Link to="/posts/catagories/Education">Education</Link></li>
        <li><Link to="/posts/catagories/Entertainment">Entertainment</Link></li>
        <li><Link to="/posts/catagories/Sports">Sports</Link></li>
        <li><Link to="/posts/catagories/Business">Business</Link></li>
        <li><Link to="/posts/catagories/Science">Science</Link></li>
        <li><Link to="/posts/catagories/Medical">Medical</Link></li>
      </ul>
      <div className='footer_copyright'><small>All Rights Reserved &copy; Copyright, WordsWorth</small></div>
    </footer>
  )
}

export default Footer
