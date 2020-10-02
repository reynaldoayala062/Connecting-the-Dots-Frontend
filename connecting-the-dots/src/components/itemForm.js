import React from 'react';
import { Form, Modal, Button, Show } from 'react-bootstrap'


class ItemForm extends React.Component {

    state = {
        name: "",
        cost: "",
        color: "red",
        chart_id: this.props.chart_id
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(itemObj => this.props.newItem(itemObj))
    }

    handleName = (e) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    handleCost = (e) => {
        this.setState({
            ...this.state,
            cost: parseInt(e.target.value, 10)
        })
    }

    handleColor = (e) => {
        this.setState({
            ...this.state,
            color: e.target.value
        })
    }

    render() {
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}> 
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control onChange={(e) => this.handleName(e)} type="text" placeholder="Light Bill" />
                </Form.Group>
                <br />
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Cost:</Form.Label>
                    <Form.Control onChange={(e) => this.handleCost(e)} type="text" placeholder="150" />
                </Form.Group>
                <br />
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Color:</Form.Label>
                    <Form.Control onChange={(e) => this.handleColor(e)} size="sm" as="select" >
                    <option>red</option>
                    <option>black</option>
                    <option>blue</option>
                    <option>yellow</option>
                    <option>gray</option>
                    </Form.Control>
                </Form.Group>
                <br />
                <Button variant="outline-primary" type="submit">
                    Add Item
                </Button> 
                <Button onClick={this.props.handleDelete} variant="outline-danger">Delete Chart</Button>
            </Form>
           
        )
    }
}

export default ItemForm
