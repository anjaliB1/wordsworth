import React, { useState } from 'react'
import PostItem from './PostItem'

import thumbnail1 from '../images/logo_.png'

const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: '',
    category: 'Education',
    title: 'title1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan vitae libero sit amet commodo. Vestibulum quis diam eu est congue elementum. Sed lobortis, ipsum non lacinia sollicitudin, orci metus faucibus ligula, et dictum sem ligula sit amet justo. Maecenas lacus lacus, lacinia id nulla non, venenatis mollis ipsum. Phasellus pulvinar mauris non diam posuere euismod. Maecenas blandit mattis ex sit amet laoreet. Morbi vitae lacus tincidunt, pharetra tortor vel, laoreet odio. Aliquam euismod, erat vel vehicula condimentum, risus lectus rhoncus eros, ut facilisis leo arcu id nisi.',
    authorId: 3
  },
  {
    id: '2',
    thumbnail: '',
    category: 'Education',
    title: 'title2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan vitae libero sit amet commodo. Vestibulum quis diam eu est congue elementum. Sed lobortis, ipsum non lacinia sollicitudin, orci metus faucibus ligula, et dictum sem ligula sit amet justo. Maecenas lacus lacus, lacinia id nulla non, venenatis mollis ipsum. Phasellus pulvinar mauris non diam posuere euismod. Maecenas blandit mattis ex sit amet laoreet. Morbi vitae lacus tincidunt, pharetra tortor vel, laoreet odio. Aliquam euismod, erat vel vehicula condimentum, risus lectus rhoncus eros, ut facilisis leo arcu id nisi.',
    authorId: 3
  },
  {
    id: '3',
    thumbnail: '',
    category: 'Education',
    title: 'title3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan vitae libero sit amet commodo. Vestibulum quis diam eu est congue elementum. Sed lobortis, ipsum non lacinia sollicitudin, orci metus faucibus ligula, et dictum sem ligula sit amet justo. Maecenas lacus lacus, lacinia id nulla non, venenatis mollis ipsum. Phasellus pulvinar mauris non diam posuere euismod. Maecenas blandit mattis ex sit amet laoreet. Morbi vitae lacus tincidunt, pharetra tortor vel, laoreet odio. Aliquam euismod, erat vel vehicula condimentum, risus lectus rhoncus eros, ut facilisis leo arcu id nisi.',
    authorId: 3
  },
  {
    id: '4',
    thumbnail: '',
    category: 'Education',
    title: 'title4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan vitae libero sit amet commodo. Vestibulum quis diam eu est congue elementum. Sed lobortis, ipsum non lacinia sollicitudin, orci metus faucibus ligula, et dictum sem ligula sit amet justo. Maecenas lacus lacus, lacinia id nulla non, venenatis mollis ipsum. Phasellus pulvinar mauris non diam posuere euismod. Maecenas blandit mattis ex sit amet laoreet. Morbi vitae lacus tincidunt, pharetra tortor vel, laoreet odio. Aliquam euismod, erat vel vehicula condimentum, risus lectus rhoncus eros, ut facilisis leo arcu id nisi.',
    authorId: 3
  },
  {
    id: '5',
    thumbnail: '',
    category: 'Education',
    title: 'title5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan vitae libero sit amet commodo. Vestibulum quis diam eu est congue elementum. Sed lobortis, ipsum non lacinia sollicitudin, orci metus faucibus ligula, et dictum sem ligula sit amet justo. Maecenas lacus lacus, lacinia id nulla non, venenatis mollis ipsum. Phasellus pulvinar mauris non diam posuere euismod. Maecenas blandit mattis ex sit amet laoreet. Morbi vitae lacus tincidunt, pharetra tortor vel, laoreet odio. Aliquam euismod, erat vel vehicula condimentum, risus lectus rhoncus eros, ut facilisis leo arcu id nisi.',
    authorId: 3
  },
  {
    id: '6',
    thumbnail: '',
    category: 'Education',
    title: 'title6',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan vitae libero sit amet commodo. Vestibulum quis diam eu est congue elementum. Sed lobortis, ipsum non lacinia sollicitudin, orci metus faucibus ligula, et dictum sem ligula sit amet justo. Maecenas lacus lacus, lacinia id nulla non, venenatis mollis ipsum. Phasellus pulvinar mauris non diam posuere euismod. Maecenas blandit mattis ex sit amet laoreet. Morbi vitae lacus tincidunt, pharetra tortor vel, laoreet odio. Aliquam euismod, erat vel vehicula condimentum, risus lectus rhoncus eros, ut facilisis leo arcu id nisi.',
    authorId: 3
  }
]

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
      {
        posts.map(({id, thumbnail, catagory, title, desc, authorId}) => <PostItem key={id} postId={id} thumbnail={thumbnail} catagory={catagory}title={title} desc={desc} authorId={authorId}/>)
      }
    </section>
  )
}

export default Posts
