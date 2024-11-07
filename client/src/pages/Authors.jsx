import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const authorsData=[
  {id: 1, avatar: '', name: 'Jane Doe', posts: 3},
  {id: 2, avatar: '', name: 'John Smith', posts: 1},
  {id: 3, avatar: '', name: 'John Smith', posts: 1},
  {id: 4, avatar: '', name: 'John Smith', posts: 1},
  {id: 5, avatar: '', name: 'John Smith', posts: 1},
  {id: 6, avatar: '', name: 'John Smith', posts: 1}
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className='authors'>
      {authors.length>0 ? <div className='container authors_container'>
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className='author_avatar'>
                <img src={avatar} alt={`Image of ${name}`}/>
              </div>
              <div className='author_info'>
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>No authors found</h2>}
    </section>
  )
}

export default Authors
