import React, { Component } from 'react';
import { Panel, PagerItem} from 'react-bootstrap';
class PanelExample extends Component {
    render() {
      return (
<div>
  <Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>

  <Panel bsStyle="success">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>

  <Panel bsStyle="info">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>

  <Panel bsStyle="warning">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>

  <Panel bsStyle="danger">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>
</div>
 );
}
}

export default PanelExample;
