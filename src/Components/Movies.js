import React from "react";
import styles from "./Movies.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Movies = ({ movies }) => {
  return (
    <div className={styles.container2}>
      <h1 >FILM AURA</h1>
      <div className={styles.container3}>
        {movies.map((item) => (
          <div className={styles.card} key={item.id}>
            <p>{item.movie}</p>
            <p>{item.rating} <FontAwesomeIcon icon={faStar} /></p>
            <a href={item.imdb_url} target="_blank" rel="noopener noreferrer" >Click Here</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Movies;
