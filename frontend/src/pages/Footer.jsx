import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer className="w-full bg-dark p-8">
      <div className="mx-1.5 flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Link to="/" className="text-3xl font-bold tracking-wider text-red-400">
          ChargeEV.
        </Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              component={Link}
              to="/explore/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
            >
              Explore
            </Typography>
          </li>
          <li>
            <Typography
              component={Link}
              to="/news"
              color="blue-gray"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
            >
              News
            </Typography>
          </li>
          <li>
            <Typography
              component={Link}
              to="/about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
              
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              component={Link}
              to="/contact-us"
              color="blue-gray"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        Copyright &copy; 2024 CahrgeEV. All rights reserved.
      </Typography>
      <Typography color="blue-gray" className="text-center font-normal">
      Made with <span class="lnr lnr-heart" style={{ color: '#F87171', fontSize: '17px', fontWeight:'bold'}}></span> in India.
      </Typography>

    </footer>
  )
}

export default Footer
