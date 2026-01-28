import { useParams, useNavigate } from "react-router-dom";
const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 28 },
    { id: 3, name: "Alex Brown", email: "alex@example.com", age: 30 }
];

function UserDetail() {

    const { id } = useParams();
    const navigate = useNavigate();
    const user = users.find((u) => u.id === Number(id));

    if (!user) return <p>User not found</p>;

    return (
        <div className="page">
            <h2>User Details</h2>

                    <p><strong>Name:</strong>{user.name}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                    <p><strong>Age:</strong>{user.age}</p>

                    <button onClick={()=>navigate("/users")}>Go Back</button>
                </div>
           
        
    );
}
export default UserDetail;