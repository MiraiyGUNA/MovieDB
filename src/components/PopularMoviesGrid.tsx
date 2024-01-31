import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { Link } from 'react-router-dom';

const PopularMoviesGrid = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const url = 'https://api.themoviedb.org/3/movie/popular?language=pt&page=1&region=pt';
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTViNzJjMDhlODYzOTFjMTM3NTQxYjIyODM0M2QxYyIsInN1YiI6IjY1NWZhZGYxMmIxMTNkMDEyZDAxY2Q5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6-TbM4Fpl6EFDxfR_4Gt-BH77NRB2tC9Kp2m4yAMxc'
                }
            };

            try {
                const response = await axios.get(url, options);
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <IonGrid>
            <IonRow>
                {movies.map((movie, index) => (
                    <IonCol size="2" key={index}>
                        <Link to={`/movies/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                style={{ objectFit: 'cover', height: '300px' }}
                            />
                        </Link>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default PopularMoviesGrid;
