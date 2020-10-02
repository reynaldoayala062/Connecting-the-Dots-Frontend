import React from 'react';
import Chart from "chart.js";
import ItemForm from './itemForm'
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



let ReactBsTable  = require('react-bootstrap-table');
let BootstrapTable = ReactBsTable.BootstrapTable;
let TableHeaderColumn = ReactBsTable.TableHeaderColumn;


class MyChart extends React.Component {

    state = {
        id: this.props.chart.id,
        name: this.props.chart.name,
        kind: this.props.chart.kind,
        user: {
            id: this.props.chart.user.id,
            name: this.props.chart.user.name,
        },
        items: this.props.chart.items !== undefined ? this.props.chart.items : []
    }

    newItem = (itemObj) => {
        this.setState({
            ...this.state,
            items: [...this.state.items, itemObj]
        })
    }

    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: this.props.chart.kind,
            data: {
                //Bring in data
                labels: this.state.items !== undefined ? this.state.items.map(item => item.name) : null,                      
                datasets: [
                    {
                        label: "Sales",
                        data: this.state.items !== undefined ? this.state.items.map(item => item.cost): null,
                        borderColor: this.state.items !== undefined ? this.state.items.map(item => item.color): null,
                        backgroundColor: this.state.items !== undefined ? this.state.items.map(item => item.color): null,
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

    componentDidUpdate(prevState) {
        if (this.state !== prevState) {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: this.props.chart.kind,
            data: {
                //Bring in data
                labels: this.state.items !== undefined ? this.state.items.map(item => item.name) : null,                      
                datasets: [
                    {
                        label: "Sales",
                        data: this.state.items !== undefined ? this.state.items.map(item => item.cost): null,
                        borderColor: this.state.items !== undefined ? this.state.items.map(item => item.color): null,
                        backgroundColor: this.state.items !== undefined ? this.state.items.map(item => item.color): null,
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
    }

    handleDelete = () => {
        this.props.deleteChart(this.state.id)
    }

    handleClick = (newValue) => {
        fetch(`http://localhost:3000/items/${newValue.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newValue)
        })
        .then(resp => resp.json())
        .then(data => {

            const updatedItems = [...this.state.items].map(item => {
                if( item.id === data.id ){
                    return data
                } else {
                    return item
                }
            })

            this.setState({
                ...this.state,
                items: updatedItems
            })
        })
    }

    onDeleteRow = (row) => {
        fetch(`http://localhost:3000/items/${row[0]}`, {
            method: "DELETE"
        })
        let newArrayItem = this.state.items.filter((item) => {
          return item.id !== row[0];
        });
        this.setState({
            ...this.state.items,
            items: newArrayItem
        });  
    }




    render() {
        let itemDatas = this.state.items !== undefined ? this.state.items.map(item => item) : null
        const cellEditProp = {
            mode: 'click',
            afterSaveCell: this.handleClick
        }

        return (
            <div>
                <h1>{this.props.chart.name}'s Expense Report </h1>
                <div className="float-container">
                    <div className="item-chart">
                        <ItemForm chart_id={this.props.chart.id} newItem={this.newItem} handleDelete={this.handleDelete} /> <br/>
                    </div>
                    <div className="item-chart">
                        <BootstrapTable data={itemDatas} cellEdit={ cellEditProp } deleteRow={ true } selectRow={ { mode: 'radio' } } options={ { onDeleteRow: this.onDeleteRow } } striped hover > 
                            <TableHeaderColumn isKey={true} dataField='id' dataAlign='left' width='0' >Id</TableHeaderColumn>
                            <TableHeaderColumn dataField='name' dataAlign='left' width='70' >Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='cost' dataSort={true} headerAlign='right' dataAlign='right' width='40' >Cost</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                    <div className="item-chart">
                        <canvas
                            id="myChart"
                            ref={this.chartRef}      
                        />
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default MyChart