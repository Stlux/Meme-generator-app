import React from 'react'
import {render} from 'react-dom'
import Navbar from './components/navbar';
import Form from './components/form';

import "./style/style.css";

render(

    <>
        <Navbar />
        <Form />
    </>

    ,document.getElementById('root'));

