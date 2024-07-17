import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormExample=()=>{
    const email=useRef()
    const password=useRef()
    const checkbox=useRef()

    const emailHandler=(e)=>{
        e.preventDefault()
        const emailData=email.current.value
        const passwordData=password.current.value
        const checkboxData=checkbox.current.value
        console.log(emailData,passwordData,checkboxData)
    }
    return (
        <Form onSubmit={emailHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={email}/>
           
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={password}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" ref={checkbox}>
            Submit
          </Button>
        </Form>
      )
      
}