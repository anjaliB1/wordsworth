import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='error_page'>
      <div className='center'>
        <Link to="/" className="btn primary">Go back Home</Link>
        <h3>Page Not Found</h3>
      </div>
    </section>
  )
}

export default ErrorPage
