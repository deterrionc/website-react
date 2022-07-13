import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {

  return (
    <div className='container-fluid bg-dark min-vh-100'>
      <div className='row'>
        <div className="header">
          <ul className='list-group'>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="HOME">
              <Link to='/'>
                <i className='fa fa-home h5 width-30 bg-secondary border border-secondary rounded-pill'></i>
              </Link>
            </li>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="ABOUT ME">
              <Link to='/about'>
                <i className='fa fa-user-circle-o h5 width-30 bg-secondary border border-secondary rounded-pill'></i>
              </Link>
            </li>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="PORTFOLIO">
              <Link to='/portfolio'>
                <i className='fa fa-briefcase h5 width-30 bg-info border border-info rounded-pill'></i>
              </Link>
            </li>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="CONTACT">
              <Link to='/contact'>
                <i className='fa fa-envelope-open h5 width-30 bg-secondary border border-secondary rounded-pill'></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className='col'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-8'>
                <div className='text-center mt-3'>
                  <img className='img-fluid' alt='SETIMAGE' src='/img/portfolio.jpg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio