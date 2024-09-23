import React from 'react'

const PostItem = ({postId, category, title, description, authorId, thumbnail}) => {
  return (
    <article className='post'>
        <div className='post_thumbnail'>
            <img src={thumbnail} alt={title} />
        </div>
        <div className='post_content'>
        
        </div>
    </article>
  )
}

export default PostItem
