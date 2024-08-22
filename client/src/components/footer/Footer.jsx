import './footer.css'
import React from 'react'

export default function Footer() {
  return (
    <footer>Copyright &copy; 
        <span className='date'> {new Date().getFullYear()}</span>
    </footer>
  )
}
