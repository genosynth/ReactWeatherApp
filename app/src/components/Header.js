import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function header({makeAPICall}) {
  return (
    <div className='header-nav'>
         <h1>MY WEATHER</h1>
        <div className='search-header'>
          
            <InputGroup className="mb-3">
        
            <Form.Control
            placeholder="Country/City"
            aria-label="Country/City"
            aria-describedby="basic-addon1"
            />
             <Button variant="dark" onClick={()=>{makeAPICall("malta")}}>Search</Button>
            </InputGroup>
        </div> 
    </div>
  )
}

export default header