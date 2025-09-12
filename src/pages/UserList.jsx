import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function UserList({ users, setUsers }) {
  const navigate = useNavigate();

  const deleteUser = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <Container className="mt-4">
      <h2>Movie List</h2>
      {users.length === 0 ? (
        <p>No Movies found. Try adding one!</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.year}</td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => navigate(`/edit/${user.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

