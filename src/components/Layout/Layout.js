import React from 'react'
import "./Layout.css";
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const Layout = (props) => {

    const renderLayout = () => {
      return <div className='layout'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    }
  return (
    <>
      {renderLayout()}
    </>
  )
}

export default Layout