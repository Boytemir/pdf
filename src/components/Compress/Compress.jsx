import React from 'react';
import './Compress.css';
import Form from '../Form/Form';
import { Compres } from '../Data';

const Compress = () => {
  return (
    <div className='compress'>
       <h1>{Compres.text}</h1>
       <p>{Compres.title}</p>
       <Form btns = {Compres.btnName}/>
       <span>{Compres.info}</span>
    </div>
  )
}

export default Compress
