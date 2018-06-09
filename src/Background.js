import React, { Component } from 'react';
import Particles from 'react-particles-js'

class Background extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white', width: '100%', height: '100%', position: 'fixed' }}>
        <Particles
              params={{
                "particles": {
                  "number": {
                    "value": 30,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": 'random'
                  },
                  "shape": {
                    "type": "polygon",
                    "stroke": {
                      "width": 1,
                      "color": 'transparent'
                    },
                    "polygon": {
                      "nb_sides": 6
                    },
                    "image": {
                      "src": "",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 20,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 80,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 300,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                  },
                  "move": {
                    "enable": true,
                    "speed": 12,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 800,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 800,
                      "size": 20,
                      "duration": 2,
                      "opacity": 0.8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 400,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true}}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'fixed'
                }}
            />
      </div>
    )
  }
}

export default Background;