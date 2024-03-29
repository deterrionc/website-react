import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const About = () => {
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
                <i className='fa fa-user-circle-o h5 width-30 bg-info border border-info rounded-pill'></i>
              </Link>
            </li>
            <li className='list-group-item text-center bg-transparent border-0 p-2' data-toggle="tooltip" data-placement="top" title="PORTFOLIO">
              <Link to='/portfolio'>
                <i className='fa fa-briefcase h5 width-30 bg-secondary border border-secondary rounded-pill'></i>
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
                  <img className='img-fluid' alt='SETIMAGE' src='/img/about.jpg' />
                </div>
              </div>
              <div className='col-md-2'></div>
            </div>

            <div className='row text-white'>
              <div className='col-lg-6'>
                <div className='h3 pb-2'>PERSONAL INFOS</div>
                <div className='row'>
                  <div className='col-md-6 py-3'>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>First Name: </span><span className='text-white font-weight-bold'>Felix</span></div>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>Age: </span><span className='text-white font-weight-bold'>31 Years</span></div>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>Availability: </span><span className='text-white font-weight-bold'>Yes</span></div>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>Phone: </span><span className='text-white font-weight-bold'>+1 774 277 9991</span></div>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>Skype: </span><span className='text-white font-weight-bold'>live:.cid.790cf9cb35d04526</span></div>
                  </div>
                  <div className='col-md-6 py-3'>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>Last Name: </span><span className='text-white font-weight-bold'>Moore</span></div>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>Nationality: </span><span className='text-white font-weight-bold'>USA</span></div>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>Address: </span><span className='text-white font-weight-bold'>Kissimmee, Florida</span></div>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>Email: </span><span className='text-white font-weight-bold'>ferix.moore@gmail.com</span></div>
                    <div className='py-2 text-secondary d-flex'><span className='width-120'>Languages: </span><span className='text-white font-weight-bold'>English, French</span></div>
                  </div>
                </div>
                <div className='p-2 pt-4'>
                  <a href='/img/felix.pdf' download className='btn btn-lg rounded-pill bg-info text-white'>DOWNLOAD CV <i className='fa fa-download border border-dark border-white rounded-circle p-2'></i></a>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='row'>
                  <div className='col-md-6 py-3'>
                    <div className='border border-dark border-light rounded-lg pt-2 pb-3 px-4'>
                      <div className='font-weight-bold text-info' style={{ fontSize: '50px' }}>10+</div>
                      <div className='pl-4 h5'>YEARS OF</div>
                      <div className='pl-4 h5'>EXPERIENCE</div>
                    </div>
                  </div>
                  <div className='col-md-6 py-3'>
                    <div className='border border-dark border-light rounded-lg pt-2 pb-3 px-4'>
                      <div className='font-weight-bold text-info' style={{ fontSize: '50px' }}>75+</div>
                      <div className='pl-4 h5'>COMPLETED</div>
                      <div className='pl-4 h5'>PROJECTS</div>
                    </div>
                  </div>
                  <div className='col-md-6 py-3'>
                    <div className='border border-dark border-light rounded-lg pt-2 pb-3 px-4'>
                      <div className='font-weight-bold text-info' style={{ fontSize: '50px' }}>57+</div>
                      <div className='pl-4 h5'>HAPPY</div>
                      <div className='pl-4 h5'>CUSTOMERS</div>
                    </div>
                  </div>
                  <div className='col-md-6 py-3'>
                    <div className='border border-dark border-light rounded-lg pt-2 pb-3 px-4'>
                      <div className='font-weight-bold text-info' style={{ fontSize: '50px' }}>36+</div>
                      <div className='pl-4 h5'>AWARDS</div>
                      <div className='pl-4 h5'>WON</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 pt-4'>
                <hr className='border border-top-0 border-dark' />
              </div>
            </div>

            <div className='row text-white'>
              <div className='col-12'>
                <div className='text-center py-3 pt-5 h3'>MY SKILLS</div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={45} />
                    <div className='pt-3'>HTML</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={67} />
                    <div className='pt-3'>CSS</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={36} />
                    <div className='pt-3'>SCSS</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={75} />
                    <div className='pt-3'>Tailwind</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={89} strokeColor='#4CAF50' />
                    <div className='pt-3 h6'>JavaScript</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={85} />
                    <div className='pt-3'>TypeScript</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={94} strokeColor='#4CAF50' />
                    <div className='pt-3 h6'>Node.js</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={92} strokeColor='#4CAF50' />
                    <div className='pt-3'>Express.js</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={91} strokeColor='#4CAF50' />
                    <div className='pt-3 h6'>Golang</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={88} />
                    <div className='pt-3'>Python Django</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={95} strokeColor='#4CAF50' />
                    <div className='pt-3 h6'>React</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={91} strokeColor='#4CAF50' />
                    <div className='pt-3'>Next.js</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={88} />
                    <div className='pt-3 h6'>Angular</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={67} />
                    <div className='pt-3'>Nest.js</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={79} />
                    <div className='pt-3 h6'>Vue</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={75} />
                    <div className='pt-3'>Nuxt.js</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={93} strokeColor='#4CAF50' />
                    <div className='pt-3 h6'>Bootstrap</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={89} strokeColor='#4CAF50' />
                    <div className='pt-3'>Stripe</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={72} />
                    <div className='pt-3 h6'>Selenium</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={68} />
                    <div className='pt-3'>Web Scrapping</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={81} />
                    <div className='pt-3 h6'>Laravel</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={66} />
                    <div className='pt-3'>PHP</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={91} strokeColor='#4CAF50' />
                    <div className='pt-3 h6'>Web3.js</div>
                  </div>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={82} />
                    <div className='pt-3'>Smart Contract</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='row'>
                  <div className='col-6 py-4'>
                    <ProgressBar strokeWidth={8} percentage={92} strokeColor='#4CAF50' />
                    <div className='pt-3 h6'>Solidity</div>
                  </div>
                </div>
              </div>
              <div className='col-12 pt-4'>
                <hr className='border border-top-0 border-dark' />
              </div>
            </div>

            <div className='row text-white py-5'>
              <div className='col-12 text-center py-3 pt-5 h3'>
                EXPERIENCE & EDUCATION
              </div>
              <div className='col-md-6'>
                <div className='d-flex py-3'>
                  <div className='text-center mr-4'><i className='fa fa-institution h5 width-30 bg-info border border-info rounded-pill'></i></div>
                  <div>
                    <div className='badge badge-dark'>Mar 2020 - Sep 2022</div>
                    <div className='pt-2'><span className='h5 font-weight-bold'>Senior Backend Developer</span></div>
                    <div className='py-2'>Silicon Slopes Consulting LLC, Utah, United States</div>
                  </div>
                </div>
                <div className='d-flex py-3'>
                  <div className='text-center mr-4'><i className='fa fa-institution h5 width-30 bg-info border border-info rounded-pill'></i></div>
                  <div>
                    <div className='badge badge-dark'>Aug 2018 - Feb 2020</div>
                    <div className='pt-2'><span className='h5 font-weight-bold'>Full Stack Web Developer</span></div>
                    <div className='py-2'>Speed Pro Tech INC, Toronto, Canada</div>
                  </div>
                </div>
                <div className='d-flex py-3'>
                  <div className='text-center mr-4'><i className='fa fa-institution h5 width-30 bg-info border border-info rounded-pill'></i></div>
                  <div>
                    <div className='badge badge-dark'>Jan 2018 - Aug 2018</div>
                    <div className='pt-2'><span className='h5 font-weight-bold'>Database Administrator and Backend Developer</span></div>
                    <div className='py-2'>Coco Creates LLC, Toronto, Canada </div>
                  </div>
                </div>
                <div className='d-flex py-3'>
                  <div className='text-center mr-4'><i className='fa fa-institution h5 width-30 bg-info border border-info rounded-pill'></i></div>
                  <div>
                    <div className='badge badge-dark'>Aug 2016 - Dec 2017</div>
                    <div className='pt-2'><span className='h5 font-weight-bold'>Backend Developer</span></div>
                    <div className='py-2'>Sartty Pixel Age, Mississauga, Canada</div>
                  </div>
                </div>
                <div className='d-flex py-3'>
                  <div className='text-center mr-4'><i className='fa fa-institution h5 width-30 bg-info border border-info rounded-pill'></i></div>
                  <div>
                    <div className='badge badge-dark'>Jun 2013 - May 2016</div>
                    <div className='pt-2'><span className='h5 font-weight-bold'>Application Software Developer</span></div>
                    <div className='py-2'>Tangram INC LLC, Mississauga, Canada</div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
              <div className='d-flex py-3'>
                  <div className='text-center mr-4'><i className='fa fa-institution h5 width-30 bg-info border border-info rounded-pill'></i></div>
                  <div>
                    <div className='badge badge-dark'>2015</div>
                    <div className='pt-2'><span className='h5 font-weight-bold'>Bachelor of Science - Computer Science</span></div>
                    <div className='py-2'>University of Toronto, ON, Canada</div>
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

export default About