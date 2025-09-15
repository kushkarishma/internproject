import { useEffect, useState } from "react";
import { getBackendData, putBackendData } from "../api/api-service";
import { toast } from "react-toastify";

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const data = await getBackendData("users");
            console.log("Fetched users:", data);

            setUsers(data.filter((u) => u.role !== "admin"));
        } catch (err) {
            console.error("Error fetching users:", err);
            toast.error("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const toggleStatus = async (id, currentStatus) => {
        try {
            const response = await putBackendData(`users/${id}/status`, {
                status: currentStatus === "active" ? "inactive" : "active"
            });

            setUsers(prev =>
                prev.map(user =>
                    user.id === id ? { ...user, status: response.status } : user
                )
            );

            toast.success(response.message);
        } catch (err) {
            console.error("Error updating status:", err);
            toast.error(err.response?.data?.message || "Failed to update status");
        }
    };


    if (loading) return <p>Loading users...</p>;

    return (
        <div className="container">
            <h2 className="my-4">All Users</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        if (!user) return null;
                        return (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button
                                        className={`btn ${user.status === "active" ? "btn-success" : "btn-danger"
                                            }`}
                                        onClick={() => toggleStatus(user.id, user.status)}
                                    >
                                        {user.status === "active" ? "Activate" : "Deactivate"}
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AdminUsers;
