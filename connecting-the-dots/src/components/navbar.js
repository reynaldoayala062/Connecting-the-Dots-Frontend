import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    render() {  
        return (
            <div className="ui secondary  menu">
                <a className="active item">
                <NavLink to="/home"> Home </NavLink>
                </a>
                <a className="item">
                <NavLink to="/view"> View All Charts </NavLink>
                </a>
                <a className="item" >
                <NavLink to="/create"> Create New Chart </NavLink>
                </a>
                <div className="right menu">
                    <div className="item">
                        
                    </div>
                    <a className="ui item">
                    <NavLink to="/login"> Login </NavLink>
                    </a>
                </div>
            </div>
        )
    }

}

export default Navbar