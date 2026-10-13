
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import users from "../users";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const foundUser = users.find((member) => member.id === Number(id));
      setUser(foundUser || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

 
useEffect(() => {
  if (!loading && user) {
    document.title = `${user.name} | Team Directory`;
  } else {
    document.title = "Team Member Details | Team Directory";
  }
}, [user, loading]);


  if (loading) {
    return <p>Loading team member details...</p>;
  }

  if (!user) {
    return (
      <div>
        <h1>Team Member Not Found</h1>
        <Link to="/users">Back to Team Members</Link>
      </div>
    );
  }

  return (
    <div className="user-details">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Company: {user.company}</p>
      <p>Role: {user.role}</p>
      <Link to="/users">Back to Team Members</Link>
    </div>
  );
}

export default UserDetails;
