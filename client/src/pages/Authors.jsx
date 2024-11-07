import React, { useState } from 'react'
import Avatar1 from '../images/Author1.jpg'
import Avatar2 from '../images/Author2.jpg'
import {Link} from 'react-router-dom'

const authorsData=[
  {id: 1, avatar: Avatar1, name: 'Jane Doe', posts: 3},
  {id: 2, avatar: Avatar2, name: 'John Smith', posts: 1},
  {id: 3, avatar: Avatar2, name: 'John Smith', posts: 1},
  {id: 4, avatar: Avatar2, name: 'John Smith', posts: 1},
  {id: 5, avatar: Avatar2, name: 'John Smith', posts: 1},
  {id: 6, avatar: Avatar2, name: 'John Smith', posts: 1}
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
