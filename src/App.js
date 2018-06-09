import React, { Component } from 'react';
import { Grid, Header, Segment, Container, Icon, Image } from 'semantic-ui-react';
import Background from './Background.js'

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
          <Background />
        <Grid>
          <Grid.Row centered>
            <Segment style={{position: 'relative'}} textAlign='center' basic>
              <h1 style={{color: 'black'}}>Kyle Pendergast</h1>
              <a style={{color: 'black'}} href="https://www.facebook.com/kyle.pendergast.56"><Icon name='facebook' size='huge'/></a>
              <a style={{color: 'black'}} href="https://www.linkedin.com/in/kylependergast/"><Icon name='linkedin' size='huge'/></a>
              <a style={{color: 'black'}} href="https://twitter.com/Kvpendergast"><Icon name='twitter' size='huge'/></a>
              <a style={{color: 'black'}} href="https://www.instagram.com/kvpendergast/"><Icon name='instagram' size="huge" /></a>
            </Segment>
        </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default App;
