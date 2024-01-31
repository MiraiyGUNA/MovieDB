import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import { useParams } from 'react-router-dom';
import BackToHomeLink from '../components/BackToLink';
import { Chart } from "react-google-charts";


const MovieDetailsComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [additionalDetails, setAdditionalDetails] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>('cast');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieUrl = `https://api.themoviedb.org/3/movie/${id}?language=pt`;
      const movieOptions = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTViNzJjMDhlODYzOTFjMTM3NTQxYjIyODM0M2QxYyIsInN1YiI6IjY1NWZhZGYxMmIxMTNkMDEyZDAxY2Q5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6-TbM4Fpl6EFDxfR_4Gt-BH77NRB2tC9Kp2m4yAMxc'
        }
      };

      try {
        const movieResponse = await fetch(movieUrl, movieOptions);
        const movieJson = await movieResponse.json();
        setMovieDetails(movieJson);


        const additionalUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=pt`;
        const additionalOptions = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTViNzJjMDhlODYzOTFjMTM3NTQxYjIyODM0M2QxYyIsInN1YiI6IjY1NWZhZGYxMmIxMTNkMDEyZDAxY2Q5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6-TbM4Fpl6EFDxfR_4Gt-BH77NRB2tC9Kp2m4yAMxc'
          }
        };

        const additionalResponse = await fetch(additionalUrl, additionalOptions);
        const additionalJson = await additionalResponse.json();
        setAdditionalDetails(additionalJson);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);


  if (!movieDetails || !additionalDetails) {
    return <div>Carregando...</div>;
  }


  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'cast':
        return (
          <div>
            <ul>
              {additionalDetails?.cast.map((actor: any) => (
                <li key={actor.id}>{actor.name} como {actor.character}</li>
              ))}
            </ul>
          </div>
        );
      case 'crew':
        return (
          <div>
            <ul>
              {additionalDetails?.crew.map((crewMember: any) => (
                <li key={crewMember.id}>{crewMember.name} - {crewMember.job}</li>
              ))}
            </ul>
          </div>
        );
      case 'details':
        return (
          <div>
            <h3>Populariedade</h3>
            <p>{movieDetails.popularity}</p>
            <h3>Orçamento</h3>
            <p>${movieDetails.budget}</p>
          </div>
        );
      case 'genres':
        return (
          <div>
            {movieDetails?.genres.map((genre: any) => (
              <div key={genre.id}>{genre.name}</div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonHeader>

        </IonHeader>

        <IonContent>
          <IonGrid>
            <IonRow class="ion-justify-content-center">
              <IonCol size-sm="6" size-md="8" size-lg="10">
                <IonGrid>
                  <IonRow>
                    <IonCol><img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} /></IonCol>
                    <IonCol><h2>{movieDetails.title}</h2>
                      <p>{movieDetails.overview}</p>
                      <p>{movieDetails.runtime} min • {movieDetails.release_date}</p>
                      <IonButton onClick={() => handleTabChange('cast')}>Cast</IonButton>
                      <IonButton onClick={() => handleTabChange('crew')}>Crew</IonButton>
                      <IonButton onClick={() => handleTabChange('details')}>Details</IonButton>
                      <IonButton onClick={() => handleTabChange('genres')}>Genres</IonButton>
                      {renderContent()}
                    </IonCol>
                    <IonCol><Chart
                      width={'100%'}
                      height={'400px'}
                      chartType="PieChart"
                      data={[
                        ['Gênero', 'Porcentagem'],
                        ...movieDetails.genres.map((genre) => [genre.name, 1]),
                      ]}
                      options={{
                        title: 'Distribuição de Gêneros',
                        titleTextStyle: {
                          color: '#f3f3f3',
                        },
                        legend: {
                          position: 'top', 
                          textStyle: {
                            color: '#f3f3f3', 
                            fontSize: 12,   
                          },
                        },
                        pieHole: 0.4,
                        is3D: true,
                        backgroundColor: '#1b2838',
                        hAxis: {
                          titleTextStyle: {
                            color: '#f3f3f3',
                            fontSize: '12',
                          },
                          textStyle: {
                            color: '#f3f3f3',
                            fontSize: '9',
                          },
                        },
                        vAxis: {
                          titleTextStyle: {
                            color: '#f3f3f3',
                            fontSize: '12',
                          },
                          textStyle: {
                            color: '#f3f3f3',
                            fontSize: '9',
                          },
                        },
                      }}
                    />
                      <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="BarChart"
                        data={[
                          ['Categoria', 'Orçamento', 'Receita'],
                          ['Detalhes Financeiros', movieDetails.budget, movieDetails.revenue],
                        ]}
                        options={{
                          legend: {
                            position: 'top', 
                            textStyle: {
                              color: '#f3f3f3', 
                              fontSize: 12,   
                            },
                          },
                          title: 'Detalhes Financeiros',
                          titleTextStyle: {
                            color: '#f3f3f3',
                          },
                          isStacked: true,
                          backgroundColor: '#1b2838',
                          hAxis: {
                            title: 'Valor',
                            minValue: 0,
                            titleTextStyle: {
                              color: '#f3f3f3',
                              fontSize: '12',
                            },
                            textStyle: {
                              color: '#f3f3f3',
                              fontSize: '9',
                            },
                          },
                          vAxis: {
                            title: 'Categoria',
                            titleTextStyle: {
                              color: '#f3f3f3',
                              fontSize: '12',
                            },
                            textStyle: {
                              color: '#f3f3f3',
                              fontSize: '9',
                            },
                          },
                        }}
                      /></IonCol>
                    <BackToHomeLink />
                  </IonRow>






                </IonGrid>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default MovieDetailsComponent;
