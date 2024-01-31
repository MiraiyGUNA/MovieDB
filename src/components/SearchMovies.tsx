import React, { useState } from 'react';
import {
  IonSearchbar,
  IonList,
  IonItem,
  IonImg,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';



const SearchMovies = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [yearFilter, setYearFilter] = useState('');
  const history = useHistory();



  const handleSearch = async (text: string) => {
    const query = encodeURIComponent(text.trim());
    let url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=pt&page=1&region=pt&query=${query}`;

    if (yearFilter) {
      url += `&primary_release_year=${yearFilter}`;
    }


    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTViNzJjMDhlODYzOTFjMTM3NTQxYjIyODM0M2QxYyIsInN1YiI6IjY1NWZhZGYxMmIxMTNkMDEyZDAxY2Q5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6-TbM4Fpl6EFDxfR_4Gt-BH77NRB2tC9Kp2m4yAMxc' // Substitua 'seuTokenAqui' pelo seu token real
      }
    };

    try {

      const response = await fetch(url, options);
      const json = await response.json();
      setSearchResults(json.results);
      setShowFilters(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e: CustomEvent) => {
    const text = (e.target as HTMLInputElement).value;
    setSearchText(text);
    handleSearch(text);
  };

  const handleMovieClick = (movieId: number) => {
    history.push(`/movies/${movieId}`);
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol size="12">
          <IonSearchbar
            value={searchText}
            onIonChange={handleInputChange}
            placeholder="Pesquisar filmes"
          />
        </IonCol>
        <IonCol size="12">
          {showFilters && (
            <IonDatetime
              presentation="year"
              color="primary"
              value={yearFilter}
              onIonChange={(e) => setYearFilter(e.detail.value)}
            />
          )}

          {showFilters && (
            <IonButton onClick={() => handleSearch(searchText)}>Aplicar Filtros</IonButton>
          )}
        </IonCol>
      </IonRow>
      {searchResults.length > 0 && (
        <IonRow>
          <IonCol size="12">
            <IonList>
              {searchResults.map((movie: any) => (
                <IonItem key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                  <IonImg
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: '100px', height: '150px', objectFit: 'cover' }}
                    slot="start"
                  />
                  <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                  </div>
                </IonItem>
              ))}
            </IonList>
          </IonCol>
        </IonRow>
      )}
    </IonGrid>
  );
};

export default SearchMovies;
