import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoArrowSwitch } from "react-icons/go";
import { useRef } from 'react';
export default function Screen() {
    const[input2,setInput2]= useState("");
    const[result,setResult]= useState("");
    const input= useRef(null);
    const secinput= useRef(null);
  //  console.log(input1);
  const changer= async()=>{
       console.log(from)
       console.log(to)
       console.log(input2)
       const res =  await fetch(
        `https://api.frankfurter.app/latest?amount=${input2}&from=${from}&to=${to}`
      );
      const data =await res.json();
      const x= data.rates;
      var c=0;
      for(var y in x){
        c= x[y];
        //console.log(x[y]);
      }
      console.log(c);
      setResult(c);
    }

const clearer=()=>{  
        setInput2("");
        setResult("");
    }
const getInitialState = () => {
        const value = "AUD";
        return value;
    };
    
const [from, setDropValue] = useState(getInitialState);
const [to, setDropValue1] = useState(getInitialState);

const handleChange = (e) => {
    setDropValue(e.target.value);
   // setDropValue1(e.target.value);
  };
const handleChange1 = (e) => {
   // setDropValue(e.target.value);
    setDropValue1(e.target.value);
  };
  
    const reverser=()=>{
        var temp= from
        setDropValue(to)
        setDropValue1(temp)
    }
  return (
    <>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Currency Converter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row style={{paddingTop:'20px'}}>
       <Col> <InputGroup className="mb-3">  
      <select value={from} onChange={handleChange}>
      <option value= "AUD">AUD</option>
   <option value= "BGN">BGN</option>
   <option value= "BRL">BRL</option>
   <option value= "CAD">CAD</option>
   <option value= "CHF">CHF</option>
   <option value= "CNY">CNY</option>
   <option value= "CZK">CZK</option>
   <option value= "DKK">DKK</option>
   <option value= "EUR">EUR</option>
   <option value= "GBP">GBP</option>
   <option value= "HKD">HKD</option>
   <option value= "HUF">HUF</option>
   <option value= "IDR">IDR</option>
   <option value= "ILS">ILS</option>
   <option value= "INR">INR</option>
   <option value= "ISK">ISK</option>
   <option value= "JPY">JPY</option>
   <option value= "KRW">KRW</option>
   <option value= "MXN">MXN</option>
   <option value= "MYR">MYR</option>
   <option value= "NOK">NOK</option>
   <option value= "NZD">NZD</option>
   <option value= "PHP">PHP</option>
   <option value= "PLN">PLN</option>
   <option value= "RON">RON</option>
   <option value= "SEK">SEK</option>
   <option value= "SGD">SGD</option>
   <option value= "THB">THB</option>
   <option value= "TRY">TRY</option>
   <option value= "USD">USD</option>
   <option value= "ZAR">ZAR</option>
      </select>
   
   
   
      </InputGroup> </Col>
     <Col> <Button onClick={reverser}><GoArrowSwitch /></Button></Col>
      <Col>
      
      <InputGroup className="mb-3">
      <select value={to} onChange={handleChange1}>
      <option value= "AUD">AUD</option>
   <option value= "BGN">BGN</option>
   <option value= "BRL">BRL</option>
   <option value= "CAD">CAD</option>
   <option value= "CHF">CHF</option>
   <option value= "CNY">CNY</option>
   <option value= "CZK">CZK</option>
   <option value= "DKK">DKK</option>
   <option value= "EUR">EUR</option>
   <option value= "GBP">GBP</option>
   <option value= "HKD">HKD</option>
   <option value= "HUF">HUF</option>
   <option value= "IDR">IDR</option>
   <option value= "ILS">ILS</option>
   <option value= "INR">INR</option>
   <option value= "ISK">ISK</option>
   <option value= "JPY">JPY</option>
   <option value= "KRW">KRW</option>
   <option value= "MXN">MXN</option>
   <option value= "MYR">MYR</option>
   <option value= "NOK">NOK</option>
   <option value= "NZD">NZD</option>
   <option value= "PHP">PHP</option>
   <option value= "PLN">PLN</option>
   <option value= "RON">RON</option>
   <option value= "SEK">SEK</option>
   <option value= "SGD">SGD</option>
   <option value= "THB">THB</option>
   <option value= "TRY">TRY</option>
   <option value= "USD">USD</option>
   <option value= "ZAR">ZAR</option>
      </select>
      </InputGroup>
      </Col>
      </Row>
      <Row>
        <Col>
        <Form.Control aria-label="Text input with dropdown button" type="number" placeholder='Enter numerics only ' ref={secinput}  value={input2} onChange={(e)=>{setInput2(e.target.value)}} />
        </Col>
        <Col>

        </Col>
        <Col>
        <Form.Control aria-label="Text input with dropdown button"   value={result} />
        </Col>
      </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={changer}>Convert</Button>
          <Button variant="secondary" onClick={clearer}>Clear</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>
  )
}













  // const handler1=(text)=>{
    //     if(!isNaN(text)){
    //         setInput1(text);
    //     }
    //     const numericValue = text.replace(/[^0-9]/g, ""); 
    //     setInput1(numericValue); 
    // }
    // const handler2=(text)=>{
    //     if(!isNaN(text)){
    //         setInput2(text);
    //     }
    //     const numericValue = text.replace(/[^0-9]/g, ""); 
    //     setInput2(numericValue); 
    // }