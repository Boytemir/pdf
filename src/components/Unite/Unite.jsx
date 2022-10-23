import React from 'react';
import Form from '../Form/Form';
import './Unite.css';
import { UniteS } from '../Data';


const Unite = () => {
  return (
    <div className='unite'>
       <h1>{UniteS.text}</h1>
       <p>{UniteS.title}</p>
       <Form btns = {UniteS.btnName}/>
       <span>{UniteS.info}</span>
    </div>
  )
}

export default Unite
