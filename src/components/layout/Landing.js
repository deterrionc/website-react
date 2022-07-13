import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {

  return (
    <div className='container-fluid landing'>
      <div className='row'>
        <div className="header">
          <ul className='list-group'>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="HOME">
              <Link to='/'>
                <i className='fa fa-home h5 width-30 bg-info rounded-pill'></i>
              </Link>
            </li>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="ABOUT ME">
              <Link to='/about'>
                <i className='fa fa-user-circle-o h5 width-30 bg-secondary rounded-pill'></i>
              </Link>
            </li>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="PORTFOLIO">
              <Link to='/portfolio'>
                <i className='fa fa-briefcase h5 width-30 bg-secondary rounded-pill'></i>
              </Link>
            </li>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="CONTACT">
              <Link to='/contact'>
                <i className='fa fa-envelope-open h5 width-30 bg-secondary rounded-pill'></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-4 sidebar'>
          <div className='m-4'>
            <img className='img-fluid rounded-circle' alt='SETIMAGE' src='/img/felix.jpg' />
            <div className='mt-2 text-white'>
              <div className='h2 text-center'>Felix Moore</div>
              <div className='h6 text-center'>- FULL-STACK SOFTWARE ENGINEER -</div>
              <div className='m-4'>
                <div className='pb-2'>
                  <Link to='/about' className='text-white h6'><i className='fa fa-user-circle-o mr-2'></i>ABOUT</Link>
                </div>
                <div className='pb-2'>
                  <Link to='/portfolio' className='text-white h6'><i className='fa fa-briefcase mr-2'></i>PORTFOLIO</Link>
                </div>
                <div className='pb-2'>
                  <Link to='/contact' className='text-white h6'><i className='fa fa-envelope-open mr-2'></i>CONTACT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-8 col-md-7' style={{ background: 'rgba(0,0,0,0.3)', minHeight: '100vh' }}>
          <div className='p-5 text-white'>
            <h1>Hi, I'm Felix,</h1>
            <h2>a software engineer specialized in </h2>
            <h2>both <u>front-end</u> and <u>back-end</u></h2>
            <h4 className='text-justify pt-4'>I'm a Toronto based web & app designer & developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</h4>
            <div className='p-2 pt-4'>
              <Link to='/about' className='btn btn-lg rounded-pill blue-transparent text-white'>MORE ABOUT ME <i className='fa fa-arrow-circle-o-right'></i></Link>
            </div>
          </div>
        </div>
        <div className='col-lg-1 col-md-1' style={{ background: 'rgba(0,0,0,0.3)' }}></div>
      </div>
    </div >
  )
}

export default Landing