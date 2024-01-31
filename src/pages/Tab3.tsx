import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { close, closeCircle, pin } from 'ionicons/icons';
import { IonChip, IonIcon } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { videocam } from 'ionicons/icons';

import './Tab3.css';
import FavoriteMovies from '../components/FavoriteMovies';
import FavoriteTV from '../components/FavoriteTV';
import RecentActivities from '../components/RecentActivities';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size-sm="6" size-md="8" size-lg="10">

              <IonGrid>

                <IonRow>

                  <IonCol>
                    <IonItem>
                      <IonAvatar slot="start">
                        <img alt="Silhouette of a person's head" src="avatar.jpg" />

                      </IonAvatar>
                      <IonLabel>Miraiy</IonLabel>
                    </IonItem>
                    <IonItem >
                      <IonButton href="/tab3">Profile</IonButton><IonButton >Activity</IonButton><IonButton >Films</IonButton><IonButton >Reviews</IonButton>
                    </IonItem>

                  </IonCol><IonCol>
                    <IonItem>
                      <IonIcon icon={videocam}></IonIcon>
                      <IonLabel>999</IonLabel>
                      <IonLabel>Films</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonIcon icon={videocam}></IonIcon>
                      <IonLabel>99</IonLabel>
                      <IonLabel>This Year</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonIcon icon={videocam}></IonIcon>
                      <IonLabel>99</IonLabel>
                      <IonLabel>Followers</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonIcon icon={videocam}></IonIcon>
                      <IonLabel>99</IonLabel>
                      <IonLabel>Following</IonLabel>
                    </IonItem>

                  </IonCol>
                </IonRow>

              </IonGrid>

           <FavoriteMovies></FavoriteMovies>

           <FavoriteTV></FavoriteTV>

<RecentActivities></RecentActivities>

             
              <IonGrid>
                <IonRow>
                  <IonCol size="6">



                  </IonCol>
                  <IonCol size="6">



                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

    </IonPage >
  );
};

export default Tab3;
