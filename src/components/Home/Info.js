import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
  return (
    <section className='py-5' >
      <div className='container'>
        <Title title='our story' />
        <div className='row'>
          <div className='col-10 col-sm-8 mx-auto text-center' >
            <p className='lead text-muted mb-5'>
              lorem daod saoid asiod asiod ais dpas dpoas dpoias pdos apodi aspood psaoi dpa dposa pdois apodi spai
            </p>
            <Link to='/empresa/'>
              <button className='btn text-uppercase btn-yellow'>empresa</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}