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
              <div className='col-md-2'></div>
              <div className='col-12 text-white py-3'>
                <div className='h3'>DCG Affiliates Onboarding System Development (2021)</div>
                <div className='h5 py-2'>Integrated System of Course Owner, Affilates and Customers</div>
                <div className='h6'><i><span className='h5 font-weight-bold'>Skills: </span>React, Node.js, Express, MySQL, MongoDB, Stripe Payment, API Gateway, Email Service, Course Editor</i></div>
                <div className='py-2'>
                  Website owner(DCG) and his partners can create/edit their courses and articles on their own frontend. Affiliates can sell the courses to the customers. Customers take part in the coures online. Admin can monitor and manage all the activities of customers in their admin panel.
                </div>
                <div className='py-2'>
                  <span>My role: </span>
                  I've developed the frontend and backend and databse designs from the start based on the figma design. And also built the whole infrastructure on server using various resources to handle thousands of request while keeping secure our site.
                </div>
                <div className='py-2'><a className='text-info' href='https://dcgonboarding.com' target='_blink' rel='noreferrer'>https://dcgonboarding.com</a></div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/dcg1.jpg' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/dcg2.jpg' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/dcg3.jpg' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/dcg7.jpg' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 text-white py-3'>
                <div className='h3'>Keto Metaflex System (2021)</div>
                <div className='h5 py-2'>Integrated System of Keto Web App</div>
                <div className='h6'><i><span className='h5 font-weight-bold'>Skills: </span>React, Node.js, Express, MySQL, MongoDB, Algorithms, Machine Learning, API Gateway, Email Service, Payment Gateway</i></div>
                <div className='py-2'>
                  <span>My role: </span>
                  I've developed the keto get-diet system based on the keto-diet algorithms. And also built the integrated keto web app including keto diet recipes, meal-plans, products, courses and etc. 
                </div>
                <div className='py-2'><a className='text-info' href='https://myketomarketplace.com' target='_blink' rel='noreferrer'>https://myketomarketplace.com</a></div>
                <div className='py-2'><a className='text-info' href='http://mealplan.theketolife.online' target='_blink' rel='noreferrer'>http://mealplan.theketolife.online</a></div>
                <div className='py-2'><a className='text-info' href='https://www.customketodiet.com/get-diet' target='_blink' rel='noreferrer'>https://www.customketodiet.com/get-diet</a></div>
                <div className='py-2'><a className='text-info' href='https://ketodietapp.com/Blog/page/KetoDiet-Buddy' target='_blink' rel='noreferrer'>https://ketodietapp.com/Blog/page/KetoDiet-Buddy</a></div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/keto1.jpg' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/keto2.jpg' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/keto3.jpg' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/keto4.jpg' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/keto5.jpg' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='p-4'>
                      <img className='img-fluid' alt='SETIMAGE' src='/img/keto6.jpg' />
                    </div>
                  </div>
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