import React, { Component } from 'react';
import { ProgressBar} from 'react-bootstrap';
class ProgressExample extends Component {
    render() {
      return (
        <div>
        <ProgressBar active now={45}  />
        <ProgressBar striped bsStyle="info" now={20} />
        <ProgressBar striped bsStyle="warning" now={60} />
        <ProgressBar striped bsStyle="danger" now={80} />
      </div>
      );
    }
    }
    
    export default ProgressExample;
    