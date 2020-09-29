import React from 'react';
import Chart from "chart.js";
import { Form } from 'semantic-ui-react';

class MyChart extends React.Component {
    chartRef = React.createRef();
    
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: this.props.chart.kind,
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],                      
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                        borderColor: [
                            'rgb(252, 223, 0)',
                            'rgb(255, 166, 0)',
                            'rgb(255, 0, 201)'],
                        backgroundColor: [
                            'rgb(252, 223, 0)',
                            'rgb(255, 166, 0)',
                            'rgb(255, 0, 201)'],
                    }
                ],
                width: "30%"
            },
            options: {
                //Customize chart options
                maintainAspectRatio: false
                
            }
        });
    }
    render() {
        return (
            <div className="display-chart">
                <div className="ui form">
                    <div class="fields">
                        <div class="field">
                            <label>First name</label>
                            <input type="text" placeholder="First Name"></input>
                        </div>
                    </div>
                    <div class="fields">
                        <div class="field">
                            <label>Middle name</label>
                            <input type="text" placeholder="Middle Name"></input>
                        </div>
                    </div>
                    <div class="fields">
                        <div class="field">
                            <label>Last name</label>
                            <input type="text" placeholder="Last Name"></input>
                        </div>
                    </div>
                </div>
                <div className="canvas">
                    <canvas
                        id="myChart"
                        ref={this.chartRef}      
                    />
                </div>
            </div>
        )
    }
}

export default MyChart