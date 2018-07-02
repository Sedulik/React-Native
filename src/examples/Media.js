import React from 'react';
import { Media } from 'reactstrap';

const MediaExample = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object data-src="https://www.aiche.org/sites/default/files/styles/aiche_content/public/images/conference/lead/shutterstock_125233085.jpg?itok=L8YC9ofx" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );
};

export default MediaExample;