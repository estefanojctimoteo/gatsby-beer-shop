import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
  return (
    <section className='contact py-5'>
      <Title title='fale conosco'/>
      <div className='row'>
        <div className='col-10 col-sm-8 col-md-6 mx-auto'>
          <form action="https://formspree.io/mnqgnnlq" method="POST">
            {/* name */}
            <div className='form-group'>
              <label htmlFor='name'>Nome</label>
              <input
                type='text'
                className='form-control'
                name='name' id='name'
                placeholder=''
              />
            </div>            
            {/* email */}
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                className='form-control'
                name='email' id='email'
                placeholder=''
              />
            </div>            
            {/* description */}
            <div className='form-group'>
              <label htmlFor='description'>Mensagem</label>
              <textarea                
                className='form-control' rows='5'
                name='description' id='description'
                placeholder='Sua mensagem...'
              />
            </div>
            {/* submit */}
            <button 
              type='submit' 
              className='btn btn-yellow btn-block text-capitalize mt-5'
            >
              enviar
            </button> 
          </form>
        </div>
      </div>
    </section>
  )
}
