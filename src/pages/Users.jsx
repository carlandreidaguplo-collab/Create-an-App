import { useEffect, useState } from "react";
import users from "../users";
import UserCard from "../components/UserCard";

function Users() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(userId) {
    setFavorites((previousFavorites) =>
      previousFavorites.includes(userId)
        ? previousFavorites.filter((id) => id !== userId)
        : [...previousFavorites, userId]
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTeamMembers(users);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = teamMembers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Our Team Members</h1>

      <input
        type="text"
        placeholder="Search team members..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading ? (
        <p>Loading team members...</p>
      ) : filteredUsers.length === 0 ? (
        <p>No team members found.</p>
      ) : (
        <div className="user-list">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={() => toggleFavorite(user.id)}
            />
          ))}
        </div>
      )}

      {!loading && (
        <p>Total favorites: {favorites.length}</p>
      )}
    </div>
  );
}

export default Users;