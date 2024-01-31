import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MovieDetailsComponent from '../components/MovieDetails';

const MovieDetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalhes do Filme</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MovieDetailsComponent />
      </IonContent>
    </IonPage>
  );
};

export default MovieDetails;
