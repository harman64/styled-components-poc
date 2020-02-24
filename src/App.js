import React from 'react';
import styled from 'styled-components';

const RegularScreenType = styled.div`
  color:blue;
  font-size:18px;
  margin: 5px;
  `;

const SelectedScreenType = styled.div`
  color:red;
  font-size:18px;
  margin:5px;
  `;

class CommonComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() { 
    let name;
    if (this.props.width > 1000) {
      name = 'Large'
    } else if (this.props.width < 1000 && this.props.width > 700) {
      name = 'Medium';
    } else {
      name = 'Small';
    }
  if(this.props.label === name){
    return (<SelectedScreenType>{this.props.label}</SelectedScreenType>);
  }
  return (<RegularScreenType>{this.props.label}</RegularScreenType>);
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  }

  render = () => {
    return (<div>
      <CommonComponent label="Large" width={this.state.width}/>
      <CommonComponent label="Small" width={this.state.width}/>
      <CommonComponent label="Medium" width={this.state.width}/>
    </div>);
  }
}

export default App;
