import { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!users || users.length === 0) {
    return (
      <Container className="mt-4">
        <h2>Movie Not Found</h2>
        <p>Redirecting to Movie list...</p>
      </Container>
    );
  }

  const userToEdit = users.find(user => user.id === parseInt(id));

  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setYear(userToEdit.year);
    } else {
      navigate('/users');
    }
  }, [userToEdit, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { ...userToEdit, name, year };
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    navigate('/users');
  };

  return (
    <Container className="mt-4">
      <h2>Edit Movie</h2>
      <Form onSubmit={handleUpdate}>
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
        <Button type="submit" variant="success">Update Movie</Button>
      </Form>
    </Container>
  );
}

export default EditUser;