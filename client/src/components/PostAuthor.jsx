import React from 'react'
import {Link} from 'react-router-dom'
import author1 from '../images/author1.jpg'

const PostAuthor = () => {
  return (
    <Link to={'/posts/users/auth'} className='post_author'>
        <div className='post_author-avatar'>
            <img src={author1} alt=''/>
        </div>
        <div className='post_author-details'>
            <h5>By: Jane Doe</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor
