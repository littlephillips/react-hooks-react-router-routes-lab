import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsItems = directors.map((director) => (
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <h2>Movies:</h2>
      <ul> 
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>

    </div>
  ));


  return (
    <div>
      <h1>Directors Page</h1>
      {directorsItems}
    </div>
  );
};

export default Directors;
