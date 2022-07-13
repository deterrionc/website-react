import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const api = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json',
  }
})

const Contact = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')

  const onSubmit = e => {
    e.preventDefault()
    // if (window.location.hostname === 'felix-moore.netlify.app') {
    //   api.post('https://dcgonboarding.com/api/email', {name, email, subject, message})
    // } else {
      api.post('/api/email', {name, email, subject, message})
    // }
  }

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
                <i className='fa fa-briefcase h5 width-30 bg-secondary border border-secondary rounded-pill'></i>
              </Link>
            </li>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="CONTACT">
              <Link to='/contact'>
                <i className='fa fa-envelope-open h5 width-30 bg-info border border-info rounded-pill'></i>
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
                  <img className='img-fluid' alt='SETIMAGE' src='/img/get-in-touch.jpg' />
                </div>
              </div>
              <div className='col-md-2'></div>
              <div className='col-md-4 text-white py-2'>
                <h3>DON'T HESITATE !</h3>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className='d-flex align-items-center py-3'>
                  <i className='fa fa-map text-info mr-3' style={{ fontSize: '30px' }}></i>
                  <div>
                    <div>ADDRESS POINT</div>
                    <div className='font-weight-bold'>73 Widdicombe Hill Blvd, Toronto, Ontario, Canada M9R 4B3</div>
                  </div>
                </div>
                <div className='d-flex align-items-center py-3'>
                  <i className='fa fa-envelope-open text-info mr-3' style={{ fontSize: '30px' }}></i>
                  <div>
                    <div>MAIL ME</div>
                    <div className='font-weight-bold'>felixsolutions001@gmail.com</div>
                  </div>
                </div>
                <div className='d-flex align-items-center py-3'>
                  <i className='fa fa-phone-square text-info mr-3' style={{ fontSize: '35px' }}></i>
                  <div>
                    <div>CALL ME</div>
                    <div className='font-weight-bold'>+1 774 277 9991</div>
                  </div>
                </div>
                <div className='d-flex align-items-center py-3'>
                  <div className='mx-2 text-center'>
                    <a target='_blank' rel='noreferrer' href='https://join.skype.com/invite/Gbcyv0Y6OQVk'><i className='fa fa-skype h5 width-30 bg-secondary rounded-pill' style={{ paddingTop: '2px' }}></i></a>
                  </div>
                  <div className='mx-2 text-center'>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/felix-moore-8a366622b'><i className='fa fa-linkedin h5 width-30 bg-secondary rounded-pill' style={{ paddingTop: '2px' }}></i></a>
                  </div>
                  <div className='mx-2 text-center'>
                    <a target='_blank' rel='noreferrer' href='https://t.me/daskiro'><i className='fa fa-telegram h5 width-30 bg-secondary rounded-pill' style={{ paddingTop: '2px' }}></i></a>
                  </div>
                  <div className='mx-2 text-center'>
                    <a target='_blank' rel='noreferrer' href='https://github.com/daskiro514'><i className='fa fa-github h5 width-30 bg-secondary rounded-pill' style={{ paddingTop: '2px' }}></i></a>
                  </div>
                </div>
              </div>
              <div className='col-md-8 py-2'>
                <form className='form' onSubmit={onSubmit}>
                  <div className='row'>
                    <div className='col-md-6 mb-4 pb-2'>
                      <input
                        className='form-control form-control-lg rounded-pill bg-secondary border-0'
                        placeholder='YOUR NAME'
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </div>
                    <div className='col-md-6 mb-4 pb-2'>
                      <input
                        type='email'
                        className='form-control form-control-lg rounded-pill bg-secondary border-0'
                        placeholder='YOUR EMAIL'
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className='col-md-12 mb-4 pb-2'>
                      <input
                        className='form-control form-control-lg rounded-pill bg-secondary border-0'
                        placeholder='YOUR SUBJECT'
                        required
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                      />
                    </div>
                    <div className='col-md-12 mb-4 pb-2'>
                      <textarea
                        className='form-control form-control-lg rounded-xl bg-secondary border-0'
                        placeholder='YOUR MESSAGE'
                        rows={6}
                        required
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                      />
                    </div>
                    <div className='col-md-12 mb-5 pb-5'>
                      <button className='btn btn-info form-control btn-lg rounded-pill h-auto'>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact