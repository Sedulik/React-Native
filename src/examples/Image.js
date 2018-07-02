import React, { Component } from 'react';
import { Carousel, Grid, Row, Button, Col, Thumbnail } from 'react-bootstrap';

class ImageExample extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="http://www.frankreisen.at/typo3temp/pics/4fd0d204ca.jpg" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6lc3rocSfvg8heVPjFdkWwroSNvlJtfNXfbBFKe56zVjcs1_" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="http://www.galilee.com.tw/upfiles/ADUpload/chinese/tw_article_2464410308.JPG" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ImageExample;