import React from 'react'

export default function Footer() {
  return (
    <footer className='footer py-3'>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center">
            <h3>Todos os direitos reservados &copy;{new Date().getFullYear().toString()}</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}