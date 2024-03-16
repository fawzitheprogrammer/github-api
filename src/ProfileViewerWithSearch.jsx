import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users";

function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("maram-qais");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(() => {
    async function fetchUser() {
      try {
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
      } catch (error) {
        setProfile({ data: null, isLoading: false });
      }
    }
    fetchUser();
  }, [username]);

  const search = (username) => {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  };

  return (
    <div className="card">
      <ProfileSearchForm search={search} />
      {profile.isLoading ? (
        <i>Loading...</i>
      ) : profile.data ? (
        <div className="text-center">
          <img
            src={profile.data.avatar_url}
            alt="Profile"
            className="profile-img"
          />
          <p className="mb-2 font-bold">{profile.data.name}</p>
        </div>
      ) : (
        <p className="text-red-500">User not found</p>
      )}
    </div>
  );
}

export default ProfileViewerWithSearch;
