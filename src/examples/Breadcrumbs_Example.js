import React, { Component } from 'react';
import { Modal, Breadcrumb } from 'react-bootstrap';

class BreadcrumbsExample extends Component {
  render() {
    return (
        <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
     );
    }
}

export default BreadcrumbsExample;