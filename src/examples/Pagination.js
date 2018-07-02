import React, { Component } from 'react';
import { Pager, PagerItem} from 'react-bootstrap';
class PageExample extends Component {
    render() {
      return (
<Pager>
  <Pager.Item href="#">Previous</Pager.Item>{' '}
  <Pager.Item href="#">Next</Pager.Item>
</Pager>
 );
}
}

export default PageExample;
