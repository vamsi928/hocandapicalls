import React from 'react';
import SpinnerWrapper from './SpinnerWrapper';

class DisplayText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      currentUser: []
    };
  }

  showResults = e => {
    let currTarget = e.target.selectedOptions[0].value;
    let current = this.props.users.filter(user => user.name === currTarget);
    this.setState({ showResult: true, currentUser: current });
    //console.log(currentUser, showResult);
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <select onChange={e => this.showResults(e)}>
          {users.map(user => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        {this.state.showResult ? (
          <div>
            <p>{this.state.currentUser[0].id}</p>
            <p>{this.state.currentUser[0].full_name}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default SpinnerWrapper(DisplayText);
