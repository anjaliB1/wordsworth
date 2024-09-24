import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postId, catagory, title, desc, authorId, thumbnail}) => {
  return (
    <article className='post'>
        <div className='post_thumbnail'>
            <img src={thumbnail} alt={title} />
        </div>
        <div className='post_content'>
          <Link to={'/posts/${postId}'}>
            <h3>{title}</h3>
          </Link>
          <p>{desc}</p>
          <div className='post_footer'>
            <PostAuthor/>
            <Link to={'/posts/catagories/${catagory}'}>{catagory}</Link>
          </div>
        </div>
    </article>
  )
}

export default PostItem
