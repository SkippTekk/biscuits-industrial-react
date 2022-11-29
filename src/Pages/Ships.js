import Header from '../content/Header';
import Navbar from "../Ships/Navbar";
import Announcment from '../content/Announcment';
import Footer from '../content/Footer'
import Leftbar from '../Ships/Leftbar';
import Middlebar from '../Ships/Middlebar';
import Rightbar from '../Ships/Rightbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Ships = () => {
  const { id } = useParams();
  document.title=`How to build ${id}`
    return (
        <html>
    <body>
        <Header />
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Navbar />
      </nav>
          <Announcment />
      <section className='container-fluid'>
        <div className='row'>
              <Leftbar />
              <Middlebar />
              <Rightbar />
        </div>
          <div>
            <Footer />
          </div>
      </section>
    </body>
  </html>
      
    )
}
export default Ships;