import React from 'react'
import './Resume.css'
import Link from 'next/link'

const Resume = () => {
  return (
    <div className="resume-container">
      <Link className='download-link' href="Aseem_Updated-Resume.pdf" download={'Aseem_Updated-Resume.pdf'} target="_blank" rel="noopener noreferrer">
        Download my Resume
      </Link>
    </div>
  )
}

export default Resume
