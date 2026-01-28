import {Link} from "react-router-dom";
const users = [
    {id: 1, name: "John Doe", email: "john@example.com"},
    {id: 2, name: "Jane Smith", email: "jane@example.com"},
    {id: 3, name: "Alex Brown", email: "alex@example.com"}
];

function Users()
{
    return(
        <div className="page">
            <h2>Users List</h2>
            {users.map((user)=>(
                <div key={user.id} className="user-card">
                    <p><strong>{user.name}</strong></p>
<p>{user.email}</p>
<Link to={`/users/${user.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}
export default Users;