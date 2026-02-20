import React from "react";
import Home from "./Home";
import About from "./About";

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

function App() {
  return (
    <div>
      <nav></nav>
      <div id="home">
        <Home name={user.name} city={user.city} color={user.color} />
      </div>
      <div id="about">
        <About bio={user.bio} links={user.links} />
      </div>
    </div>
  );
}

export default App;