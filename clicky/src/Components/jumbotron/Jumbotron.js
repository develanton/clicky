import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Jumbo from './Jumbo.css'

const Jumbs = (props) => {
  return (
    <div>
      <Jumbotron className={{Jumbo}} fluid>
        <Container fluid>
          <h1 className="display-2"><b>Clicky Game!</b></h1>
          <h2 className="display-6"><b>Click on an image to earn points, but don't click on any more than once!</b></h2>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbs;