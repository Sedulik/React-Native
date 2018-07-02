import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
class BadgeExample extends Component {
    render() {
      return (
<p>Messages <Badge>42</Badge></p>
  );
 }
}

export default BadgeExample;