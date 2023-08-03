import React from "react";
import "./App.css";

const users = [
  { id: 1, name: "Giga", email: "giga@example.com" },
  { id: 2, name: "Gio", email: "gio@example.com" },
];

const photoUrl =
  "https://th.bing.com/th/id/R.0301819f445a8855c4a577a6763fb62d?rik=TT%2fgaYZuz1YEig&riu=http%3a%2f%2fanhede.se%2fwp-content%2fuploads%2f2014%2f01%2f130221-2528.jpg&ehk=LToqkipED3KxGj7CVuMoQrvi487RY2HN6IPZ59FCWNQ%3d&risl=&pid=ImgRaw&r=0";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={photoUrl}
          alt="Dummy"
          style={{ width: "300px", height: "400px" }}
        />
        <p>Welcome to My React App!</p>
        <h2>Dummy Users:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
