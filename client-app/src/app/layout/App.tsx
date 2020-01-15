import React, { useState, useEffect, Fragment, Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/navbar';

interface IState {
  activities: IActivity[]
}

class App extends Component {
  readonly state: IState = {
    activities: [],
  };

  componentDidMount() {
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then(response => {
      this.setState({
        activities: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <List>
          {this.state.activities.map((activity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;