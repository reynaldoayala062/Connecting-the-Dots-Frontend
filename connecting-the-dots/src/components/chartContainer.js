import React from 'react';
import ScrollArea from '@xico2k/react-scroll-area';
import MyChart from './chart.js' 

class ChartContainer extends React.Component {
    
    render() {
        return(
            <div className="chart-container"> 
                <div className="view-chart">
                    <ScrollArea
                    width="900px"
                    height="465px"
                    trackHidden
                    >
                        
                        {this.props.charts !== undefined ? this.props.charts.map(chart => <MyChart key={chart.id} chart={chart} deleteChart={this.props.deleteChart} />) : null}
                    </ScrollArea>
                </div>
            </div>
        )
    }
}

export default ChartContainer