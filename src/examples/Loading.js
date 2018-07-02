import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class LoadingExample extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        isLoading: false
      };
    }
  
    handleClick() {
      this.setState({ isLoading: true });
  
     
      setTimeout(() => {
        
        this.setState({ isLoading: false });
      }, 2000);
    }
  
    render() {
      const { isLoading } = this.state;
  
      return (
        <Button
       
          bsStyle="primary"
         able={isLoading}
          onClick={!isLoading ? this.handleClick : null}
        >
          {isLoading ? 'Loading...' : 'Loading state'}
        </Button>
      );
    }
  }
  
  

export default LoadingExample;
