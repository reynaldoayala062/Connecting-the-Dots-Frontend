import React from 'react'
import { Button, Form } from 'semantic-ui-react'



class Login extends React.Component {


    handlesubmit = (e) => {
        e.preventDefault()
        this.createUser(e.target.name.value)
    }

    createUser = (user) => {
        
        let data = {
            name: user
        }
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(newUser => { console.log(newUser)
        
        })
    }

    render() {
        return(

            <div className="container">
                <div className="login-form">
                    <Form className="form" onSubmit={(e) => this.handlesubmit(e)} >
                        <h2>Log In</h2>
                        <Form.Field>
                            <label>First Name</label>
                            <input name="name" placeholder='First Name' />
                        </Form.Field>
                        <Button  to="/view" type='submit'>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login