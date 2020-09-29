import React from 'react'
import Particles from 'react-particles-js';

class ParticlesMap extends React.Component {

    render() {
        return( <Particles
            params={{
              "particles": {
                  "line_linked": {
                              "color":"#FFFFFF"
                              },
                  "number": {
                      "value": 100
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      },
                      "onclick": { enable: true, mode: "repulse" }
                  }
              }
            }}
            style={{
              width: '100%',
              background: `red` 
            }}
            />)
    }
}

export default ParticlesMap

