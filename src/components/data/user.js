import React from 'react';

function User() {
  const user = {
    name: "Liza",
    city: "New York",
    bio: "I made this!",
    color: "firebrick",
    links: {
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza/",
    },
  };
  
  return (
    <UserProfile userInfo={user} />
  );
}

export default User;

export function UserProfile(props) {
  const user = props.userInfo;
  return (
    <div>
      <h1>{user.name}</h1>
      <p>City: {user.city}</p>
      <p>Bio: {user.bio}</p>
      <p>Color: {user.color}</p>
      <p>
        Links: 
        <ul>
          <li><a href={user.links.github}>GitHub</a></li>
          <li><a href={user.links.linkedin}>LinkedIn</a></li>
        </ul>
      </p>
    </div>
  );
}
