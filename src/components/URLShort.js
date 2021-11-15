import React, { useState } from 'react';
import { db } from "./Firebase";
import {v4 as uuidv4} from "uuid";
import styled from 'styled-components';

const Button=styled.button`
   margin:10px;
   text-style:none;
   background-color:blueviolet;
   color:white;
   border:none;
   border-radius:5px;
`;
const Form=styled.form`
    text-decoration:none;
    border:none;
    style:none;
`;
const handleFormSubmit = async(e)=>{
    e.preventDefault();
    let code=uuidv4();
    await db.collections("urls").add({
        url: url,
        code: code
    });
    alert("This is your URL - http://localhost:3000/l" +code);
};

const UrlShort=()=>{
    const [url,setUrl]=useState('');
    return (
    <Form onSubmit={handleFormSubmit}>
        <input type="text" value={url} onChange={e=>setUrl(e.target.value)} placeholder="Enter the link"></input>
        <Button>
        <input type="submit" value="Shorten"></input>
        </Button>
    </Form>
        );
}

export default UrlShort;