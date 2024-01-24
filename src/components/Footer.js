import React from 'react';
import { Container } from 'react-bootstrap';

export default function footer() {
  return (
    <div>
          <footer className="bg-dark text-light py-3">
             <Container className="text-center">
                <p>&copy; 2024 Sweet Place. All rights reserved.</p>
             </Container>
          </footer>
    </div>
  )
}

