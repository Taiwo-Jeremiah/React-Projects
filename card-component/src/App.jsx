import "./App.css";
import { Card } from "./Card";
import { useState } from "react";
// export function App() {
//   const profiles = [
//     {
//       id: 1,
//       name: "Mark",
//       title: "Front-End developer",
//       bio: "I like to work with different front-end technologies and play video games.",
//     },
//     {
//       id: 2,
//       name: "Tiffany",
//       title: "Engineering manager",
//       bio: "I have worked in tech for 15 years and love to help people grow in this industry.",
//     },
//     {
//       id: 3,
//       name: "Doug",
//       title: "Back-End developer",
//       bio: "I have been a software developer for over 20 years and I love working with Go and Rust.",
//     }
//   ];
//   return (
//     <div className="flex-container">
//       {profiles.map((profile) => (
//         <Card
//           key={profile.id}
//           name={profile.name}
//           title={profile.title}
//           bio={profile.bio}
//         />
//       ))}
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 31,
    city: "LA",
  });

  // Change user age directly
  const handleAgeChange = (e) => {
    // user.age = e.target.value;
    // console.log(user);
    setUser({
      ...user,
      age: e.target.value
    })
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <h2>Update User Age </h2>
      <input type="number" value={user.age} onChange={handleAgeChange} />
    </div>
  );
}

export default Profile;
