import React from 'react';
import './style.css';
import DisplayText from './Components/DisplayText';
import DisplayGoodBye from './Components/DisplayGoodBye';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: []
    };
  }

  componentDidMount = () => {
    setTimeout(async () => {
      const result = await axios.get(
        'https://api.github.com/users/hacktivist123/repos'
      );
      this.setState({
        isLoading: false,
        users: result.data
      });
      console.log(this.state.users);
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <DisplayText
          users={this.state.users}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
