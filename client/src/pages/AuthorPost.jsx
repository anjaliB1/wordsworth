import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../components/PostItem'

const AuthorPost = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='author_posts'>
      {
        posts.length>0 ? <div className='container posts_container'>
      {
        posts.map(({id, thumbnail, catagory, title, desc, authorId}) => <PostItem key={id} postId={id} thumbnail={thumbnail} catagory={catagory}title={title} desc={desc} authorId={authorId}/>)
      }
      </div> : <h2 className='center'>No posts found</h2>
      }
    </section>
  )
}

export default AuthorPost
