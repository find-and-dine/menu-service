import React from 'react';
import StyledDivider from './Divider';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div>
        <h2>Hello Corona Virus Infested World</h2>
        <StyledDivider />
        Hello Corona Virus Infested World
        <StyledDivider />
        Hello Corona Virus Infested World
      </div>
    );
  }
}

export default App;
