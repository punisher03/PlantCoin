import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import {Button,Grid,Message,Header} from 'semantic-ui-react';
import web3 from "./web3";
import plant from "./plant";

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + logo + ")"
};

class App extends Component {

  state={

    loading: false
  };

  onSubmit =async event=>{
    event.preventDefault();
    this.setState({loading: true});
    const accounts= await web3.eth.getAccounts();
    this.setState({loading: false});

    await plant.methods.transfer().
    send({from:accounts[0],
          gas:'1000000',
         });
    this.setState({loading: false});
  };

  render() {
    return (
    <div>
    <section style={ sectionStyle }>
    </section>

      <Grid container style={{ padding: '5em 0em' }}>
        <Grid.Row>
          <Grid.Column>
            <Header as='h1' dividing>
              Plantcoin project
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Message>
              <Header as='h1'>Hello, world!</Header>
              <p>
                By this project we aim to incentivise people to water plants. They get rewarded for their deed by the plant.
                The plant generates 0.5 plantcoins and the person who has watered the plant at the right time can claim it.
              </p>
            </Message>
          </Grid.Column>
        </Grid.Row>
       </Grid>

        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
        <h2>Plant contract</h2>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Great work!</h4>
          <div>
            <label>you deserve a reward</label>
          </div>
          <Button loading={this.state.loading}
             content="Claim reward"
             icon="add circle"
             primary
          />

        </form>
        <hr />
    </div>

    );
  }
}







export default App;
