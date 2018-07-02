import React, { Component } from 'react';
import {Carousel, Button, ButtonToolbar, Glyphicon, ButtonGroup  } from 'react-bootstrap';
class GlyphiconlExample extends Component {
    render() {
      return (
        <div>
  <ButtonToolbar>
    <ButtonGroup>
      <Button>
        <Glyphicon glyph="align-left" />
      </Button>
      <Button>
        <Glyphicon glyph="align-center" />
      </Button>
      <Button>
        <Glyphicon glyph="align-right" />
      </Button>
      <Button>
        <Glyphicon glyph="align-justify" />
      </Button>
    </ButtonGroup>
  </ButtonToolbar>
  <ButtonToolbar>
    <ButtonGroup>
      <Button bsSize="large">
        <Glyphicon glyph="star" /> Star
      </Button>
      <Button>
        <Glyphicon glyph="star" /> Star
      </Button>
      <Button bsSize="small">
        <Glyphicon glyph="star" /> Star
      </Button>
      <Button bsSize="xsmall">
        <Glyphicon glyph="star" /> Star
      </Button>
    </ButtonGroup>
  </ButtonToolbar>
</div>
       );
      }
  }
  
  export default GlyphiconlExample;