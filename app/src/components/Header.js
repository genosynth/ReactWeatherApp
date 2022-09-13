import React, {useState}from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Header({makeAPICall}) {

  const [search,updateSearch] = useState()

  
  const handleChange = event => {
    updateSearch(event.target.value);

  };

  
  return (
    <div className='header-nav'>
         <h1>MY WEATHER</h1>
        <div className='search-header'>
          
            <InputGroup className="mb-3" >
        
            <Form.Control 
            placeholder="Country/City"
            aria-label="Country/City"
            aria-describedby="basic-addon1"
            
            onChange={handleChange}
            />
             <Button variant="dark" onClick={()=>{makeAPICall(search)}}>Search</Button>
            </InputGroup>
        </div> 
    </div>
  )
}

export default Header