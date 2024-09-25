import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/technology1.jpg'

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className='container post-detail_container'>
        <div className='post-detail_header'>
          <PostAuthor/>
          <div className='post-detail_buttons'>
            <Link to={'/posts/account/edit'} className='btn sm blue'>Edit</Link>
            <Link to={'/posts/account/edit'} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is post title</h1>
        <div className='post-detail_thumbnail'>
          <img src={Thumbnail} alt=''/>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ex nec nulla lobortis, in convallis augue aliquet. Morbi venenatis felis magna, non vehicula eros pellentesque id. Donec quis sem ut quam bibendum rhoncus. Suspendisse maximus ligula at efficitur laoreet. Sed dignissim dolor maximus eros laoreet pellentesque. Aenean mattis, ipsum in ornare ullamcorper, enim turpis maximus lorem, a ornare risus massa a leo. Sed vestibulum turpis sed sagittis efficitur. Aliquam viverra sapien at efficitur auctor. Etiam massa est, lacinia eget dui a, auctor vehicula neque. Nam condimentum nulla non mi posuere pellentesque. Suspendisse ut odio sit amet ipsum molestie vehicula. Aliquam id dapibus augue. Fusce feugiat finibus purus, ac elementum nisl cursus vel. Aenean et congue leo, non fringilla nisi. Sed consectetur dui tortor, vel imperdiet mauris malesuada vitae.
        </p>
        <p>
        Quisque gravida sagittis nulla, eu feugiat dui interdum ut. Aliquam vestibulum lacus sit amet purus ultrices semper. Donec finibus, enim at eleifend elementum, velit sem gravida arcu, at convallis ipsum erat vel metus. Phasellus cursus erat et turpis faucibus elementum. Morbi in congue elit, ut pretium est. Nunc eu mollis metus. Nulla sollicitudin nibh in nisl congue eleifend. Vestibulum mattis dui ut dui porttitor condimentum. Praesent condimentum enim erat, sit amet mattis magna posuere ac. Nulla accumsan pretium mauris ut dictum. Sed quis rhoncus arcu. Donec magna diam, fringilla quis elementum sit amet, semper vitae lectus. Cras eleifend tincidunt sagittis. Phasellus eleifend at erat nec efficitur.
        </p>
        <p>
        Integer sapien quam, finibus ac ultricies nec, aliquam ac tellus. Etiam posuere maximus odio eget consequat. Integer bibendum, mauris non vehicula tristique, leo est lobortis neque, a auctor elit turpis eget dui. Aliquam bibendum tincidunt turpis, eget feugiat sem auctor a. Curabitur quis justo sit amet libero mattis aliquam at sed enim. Phasellus faucibus mi at metus rutrum molestie. Donec suscipit tortor ullamcorper ornare venenatis. In velit elit, luctus id erat id, lacinia egestas enim. Vestibulum cursus sem sit amet ligula tempus dapibus. Sed convallis justo tortor, quis porta sapien interdum ac. In in dignissim risus. Vestibulum dictum porttitor tellus, at semper ante condimentum interdum.
        </p>
      </div>
    </section>
  )
}

export default PostDetail
