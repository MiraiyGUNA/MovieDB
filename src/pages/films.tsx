import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonCard, IonButton } from '@ionic/react';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';
import { IonModal } from '@ionic/react';

const Films: React.FC = () => {
  const [showCastModal, setShowCastModal] = useState(false);
  const [showCrewModal, setShowCrewModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const cast = ["Leonardo DiCaprio", "Lily Gladstone", "Robert De Niro"]; // Substitua pelo elenco real do filme
  const crew = ["Director - Martin Scorsese", "Writer - Eric Roth"]; // Substitua pela equipe real do filme

  const handleCastClick = () => {
    setShowCastModal(true);
  };

  const handleCrewClick = () => {
    setShowCrewModal(true);
  };

  const handleDetailsClick = () => {
    setShowDetailsModal(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Killers of the Flower Moon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="auto">
              <img src="poster.jpg" alt="Killers of the Flower Moon" />
            </IonCol>
            <IonCol>
              <h2>Killers of the Flower Moon</h2>
              <h3>2023 - Directed By Martin Scorsese</h3>
              <p>
                When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.
              </p>
              <IonList>
                <IonItem>
                  <IonSelect label="Details" onIonChange={(e) => {
                    if (e.detail.value === 'cast') handleCastClick();
                    else if (e.detail.value === 'crew') handleCrewClick();
                    else if (e.detail.value === 'details') handleDetailsClick();
                  }}>
                    <IonSelectOption value="cast">Cast</IonSelectOption>
                    <IonSelectOption value="crew">Crew</IonSelectOption>
                    <IonSelectOption value="details">Details</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonButton size="small">Visto/NãoVisto</IonButton>
                    </IonCol>
                    <IonCol>
                      <IonButton size="small">Like/Dislike</IonButton>
                    </IonCol>
                    <IonCol>
                      <IonButton size="small">Watchlist</IonButton>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <p>Rating ★★★★</p>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={chevronUp} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton>
              <IonIcon icon={chevronForward} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={chevronForward} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton>
              <IonIcon icon={chevronDown} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={chevronBack} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={chevronBack} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>

      {showCastModal && (
        <IonModal isOpen={showCastModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Cast</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              {cast.map((actor, index) => (
                <IonItem key={index}>{actor}</IonItem>
              ))}
            </IonList>
            <IonButton onClick={() => setShowCastModal(false)}>Fechar</IonButton>
          </IonContent>
        </IonModal>
      )}

      {showCrewModal && (
        <IonModal isOpen={showCrewModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Crew</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              {crew.map((crewMember, index) => (
                <IonItem key={index}>{crewMember}</IonItem>
              ))}
            </IonList>
            <IonButton onClick={() => setShowCrewModal(false)}>Fechar</IonButton>
          </IonContent>
        </IonModal>
      )}

{showDetailsModal && (
  <IonModal isOpen={showDetailsModal}>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Details</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>
          <strong>Título Original:</strong> Killers of the Flower Moon
        </IonItem>
        <IonItem>
          <strong>Diretor:</strong> Martin Scorsese
        </IonItem>
        <IonItem>
          <strong>Ano:</strong> 2023
        </IonItem>
        {/* Adicione mais informações sobre o filme conforme necessário */}
      </IonList>
      <IonButton onClick={() => setShowDetailsModal(false)}>Fechar</IonButton>
    </IonContent>
  </IonModal>
)}
    </IonPage>
  );
};

export default Films;
