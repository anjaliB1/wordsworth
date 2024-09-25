import React, { useState } from 'react'
import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
      {
        posts.length>0 ? <div className='container post_container'>
      {
        posts.map(({id, thumbnail, catagory, title, desc, authorId}) => <PostItem key={id} postId={id} thumbnail={thumbnail} catagory={catagory}title={title} desc={desc} authorId={authorId}/>)
      }
      </div> : <h2 className='center'>No posts found</h2>
      }
    </section>
  )
}

export default Posts
