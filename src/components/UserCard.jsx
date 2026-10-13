import { Link } from "react-router-dom";
import Button from "./Button";

function UserCard({ user, isFavorite, onToggleFavorite }) {
  return (
    <div className="user-card">
      <h2>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </h2>

      <p>Email: {user.email}</p>
      <p>Company: {user.company}</p>
      <p>Role: {user.role}</p>

      <Button onClick={onToggleFavorite}>
        {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </Button>
    </div>
  );
}

export default UserCard;