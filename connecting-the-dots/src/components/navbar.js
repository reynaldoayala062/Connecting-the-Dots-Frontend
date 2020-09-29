import React from 'react';

class Navbar extends React.Component {


    render() {  
        return (
            <div className="ui secondary  menu">
                <a className="active item"  href="/">
                    Home
                </a>
                <a className="item" href="/view">
                    View Charts
                </a>
                <a className="item" href="/create" >
                    Create new Chart
                </a>
                <div className="right menu">
                    <div className="item">
                        
                    </div>
                    <a className="ui item" href="login">
                    Login
                    </a>
                </div>
            </div>
        )
    }

}

export default Navbar