import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../components/Header';
import NavBar from './NavBar';
import TableContainer from './TableContainer';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(process.env);
  }

  render() {
    return (
      <div id="container">
        <NavBar />
        <Grid centered>
          <Grid.Row>
            <Header />
          </Grid.Row>
          <TableContainer />
        </Grid>
      </div>
    );
  }
}

export default App;
