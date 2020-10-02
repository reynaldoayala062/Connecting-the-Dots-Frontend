import React from 'react';
import { Form } from 'semantic-ui-react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

class FormChart extends React.Component {

    state = {
        name: "",
        value: ""

    }

    handleChange = (e, { value }) => this.setState({ value })

    handleName = (e, { value }) => this.setState({ name: value })

    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name: this.state.name,
            kind: this.state.value,
            user_id: 1
        }
        this.props.createChart(data)
    }
 
    render() { 
        const { value } = this.state
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Chart has been created</Popover.Title>
              <Popover.Content>
                Head over to <strong>view all charts</strong> to take a look.
              </Popover.Content>
            </Popover>
          );
        return(
            <div className="container-chart">
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
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <Form.Button>Submit</Form.Button>
                        </OverlayTrigger>
                    </Form>
                    </div>
            </div>
        )
    }
}

export default FormChart