import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({
    username: "", password: "",
    firstName: "", lastName: "", dob: "", email: "", role: "USER"
  });
  const navigate = useNavigate();
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };



  function formatDate(dateString: string) {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return dateString;
    }

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const save = async () => {
    await client.updateUser(profile);
  };

  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" value={profile.username} onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })} />

          <label htmlFor="password">Password:</label>
          <input id="password" value={profile.password} onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })} />

          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" value={profile.firstName} onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })} />

          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" value={profile.lastName} onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })} />

          <label htmlFor="dob">Date of Birth:</label>
          <input id="dob" value={formatDate(profile.dob)} type="date" onChange={(e) =>
            setProfile({ ...profile, dob: formatDate(e.target.value) })} />

          <label htmlFor="email">Email:</label>
          <input id="email" value={profile.email} onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })} />

          <label htmlFor="role">Role:</label>
          <select id="role" value={profile.role} onChange={(e) =>
            setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button onClick={save}>
            Save
          </button>

          <button onClick={signout}>
            Signout
          </button>

          <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>


      )}
    </div>
  );
}