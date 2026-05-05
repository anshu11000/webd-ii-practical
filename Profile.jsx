import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  const changeUser = () => {
    setUser({
      name: "Harshit",
      role: "Frontend Developer",
    });
  };

  return (
    <div>
      <h2>User Details</h2>

      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>

      <button onClick={changeUser}>
        Change User
      </button>
    </div>
  );
}

export default Profile;