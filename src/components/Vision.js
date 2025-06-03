import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Vision() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card>
            <Card.Body>
              <Card.Title>Vision & Mission</Card.Title>
              <Card.Text> Society that can afford healthcare cost; that is healthy, active and vibrant to fight against lifestyle and modern diseases; a state actively involving, interfering & regulating the unethical practices and providing a pollution free environment, taking care of the old and weak, thereby establishing a proper healthcare system for the people of the state.
               
              </Card.Text>
              <Link to="/">
                <Button variant="primary">Go Back</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Vision;




