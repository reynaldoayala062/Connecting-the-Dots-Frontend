import React from 'react';
import { Form } from 'semantic-ui-react';

class FormChart extends React.Component {

    state = {
        name: "",
        value: ""

    }

    handleChange = (e, { value }) => this.setState({ value })

    handleName = (e, { value }) => this.setState({ name: value })

    handleSubmit = (e) => {
        e.preventDefault()
        this.createChart()
    }

    createChart = () => {
        let data = {
            name: this.state.name,
            kind: this.state.value,
            user_id: 1
        }
        fetch('http://localhost:3000/charts', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(newChart => {
            console.log(newChart)
            console.log(data)
            console.log(this.state)
        })
    }
 
    render() { 
        const { value } = this.state
        console.log(this.state)
        return(
            <div className="container">
                <div className="chart-form">
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <h2>Create New Chart</h2>
                        <Form.Group widths='equal'>
                        <Form.Input fluid label='Name' placeholder='Name' onChange={this.handleName}/>
                        </Form.Group>
                        <Form.Group inline>
                        <label>Type of Chart</label>
                        <Form.Radio
                            label='Pie'
                            value='pie'
                            checked={value === 'pie'}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            label='Doughnut'
                            value='doughnut'
                            checked={value === 'doughnut'}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                        <Form.Button>Submit</Form.Button>
                    </Form>
                    </div>
            </div>
        )
    }
}

export default FormChart