import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        setEmail(email);
        setPassword(password);

         event.target.email.value = null;
         event.target.password.value = null;
    }
    
    return (
        <div >
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Save for later" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>

            </Form>
            {
                email && <div>
                    <h2>Registration Complete</h2>
                    <p>Email : {email}</p>

                </div>
            }

        </div>
    );
};

export default Register;