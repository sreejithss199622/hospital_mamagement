import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card>
            <Card.Body>
              <Card.Title>Services Offered</Card.Title>
              <Card.Text>
                We offer a wide range of services including emergency care, outpatient services, specialized treatments, and more. Our dedicated team of professionals is here to provide the best care possible.
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

export default Services;