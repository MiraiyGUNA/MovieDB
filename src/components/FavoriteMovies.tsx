import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


const FavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/account/20738791/favorite/movies?language=pt&page=1&sort_by=created_at.asc', {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTViNzJjMDhlODYzOTFjMTM3NTQxYjIyODM0M2QxYyIsInN1YiI6IjY1NWZhZGYxMmIxMTNkMDEyZDAxY2Q5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6-TbM4Fpl6EFDxfR_4Gt-BH77NRB2tC9Kp2m4yAMxc'
        }
        });
        setFavoriteMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching favorite movies:', error);
      }
    };

    fetchFavoriteMovies();
  }, []);

  return (
    <div>
      <h2>Favorite Films</h2>
      <IonGrid fixed={true}>
        <IonRow>
          {favoriteMovies.map((movie) => (
            <IonCol key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default FavoriteMovies;
