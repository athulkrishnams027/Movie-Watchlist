import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddUser({ users, setUsers }) {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name,
      year, 
    };
    setUsers([...users, newUser]);
    navigate('/users');
  };

  return (
    <Container className="mt-4">
      <h2>Add New Movie</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number" 
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">Add Movie</Button>
      </Form>
    </Container>
  );
}

export default AddUser;