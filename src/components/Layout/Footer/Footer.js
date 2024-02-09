import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faGithub} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    const renderFooter = () =>{
       return <footer className='footer'>
          <div className='container'>
           <div className='row justify-content-center flex-wrap'>
            <section className="col-12 col-md-4 footer-column">
              <p>indiCaf&egrave;- A Food Delivery Startup</p>
              <p>Copyright &copy; 2024</p>
            </section>
           <section className='col-12 col-md-4 footer-column'>
            <ul>
              <li><a href='/delivery'>Delivery Policy</a></li>
              <li><a href='/returns'>Returns</a></li>
              <li><a href='/support'>Support</a></li>
            </ul>
           </section>
           <section className='col-12 col-md-4 footer-column'>
            <div>
              <a href='/git#'>
               {/* <FontAwesomeIcon icon={faGithub} size='2x' /> */}
              </a>
            </div>

           </section>
           </div>
          </div>
        </footer>
    }
  return (
    <>
    {renderFooter()}
    </>
  )
}

export default Footer