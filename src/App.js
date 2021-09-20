import "./styles.css";
import React, { useState } from "react";

var moviesList = {
  Comedy: [
    {
      name: "Mere Sonu ke Titu Ki Sweety",
      rating: "4.5/5"
    },
    {
      name: "HouseFull 3",
      rating: "4.9/5"
    }
  ],
  Musical: [
    {
      name: "Gully Boy",
      rating: "4/5"
    },
    {
      name: "Street Dancer",
      rating: "4.5/5"
    }
  ],
  Action: [
    {
      name: "SherShaah",
      rating: "5/5"
    },
    {
      name: "Baaghi 3",
      rating: "4/5"
    }
  ],
  Crime: [
    {
      name: "AndhaDhund",
      rating: "4.5/5"
    },
    {
      name: "Haseena Parekh",
      rating: "4/5"
    }
  ]
};

var movieGenre = Object.keys(moviesList);

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Movie Recommendation</h1>
      <h3>Select the genre</h3>

      <div classname="button-container">
        {movieGenre.map((selectedGenre) => (
          <button
            className="button-genre"
            onClick={() => genreClickHandler(selectedGenre)}
          >
            {selectedGenre}
          </button>
        ))}
      </div>

      <div className="show-Movies">
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesList[selectedGenre].map((movie) => (
            <li key={movie.name}>
              {" "}
              <div>{movie.name}</div>
              <div>{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
