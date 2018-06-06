import React, { Component } from 'react';
import { Header, Segment, Container, Icon } from 'semantic-ui-react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }

  componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
  }

  render() {
    const {height} = this.state
    return (
      <div style={{height: height, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Segment style={{position: 'relative'}} textAlign='center' basic>
            <Header size='huge'>Kyle Pendergast</Header>
            <a style={{color: 'black'}} href="https://www.facebook.com/kyle.pendergast.56"><Icon name='facebook' size='huge'/></a>
            <a style={{color: 'black'}} href="https://www.linkedin.com/in/kylependergast/"><Icon name='linkedin' size='huge'/></a>
            <a style={{color: 'black'}} href="https://twitter.com/Kvpendergast"><Icon name='twitter' size='huge'/></a>
            <a style={{color: 'black'}} href="https://www.instagram.com/kvpendergast/"><Icon name='instagram' size='huge'/></a>
          </Segment>
      </div>
    );
  }
}

export default App;
