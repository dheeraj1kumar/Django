import React, { useEffect, useState } from 'react';
import API from '../api';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get('/api/profile/')
      .then((res) => setProfile(res.data))
      .catch((err) => {
        console.error(err);
        alert('Unauthorized or session expired');
      });
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {profile.user.username}</h2>
      <p>Email: {profile.user.email}</p>
      <p>Role: {profile.user.role}</p>
      <p>{profile.message}</p>
    </div>
  );
}

export default Profile;
