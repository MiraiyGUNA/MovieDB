import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonSearchbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { IonAvatar } from '@ionic/react';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';

import { Swiper, SwiperSlide, IonicSlides } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

import PopularMovies from '../components/PopularMovies';
import SearchMovies from '../components/SearchMovies';
import PopularityVsScoreChart from '../components/PopularityVsScoreChart';
import PopularityVsScoreScatterChart from '../components/PopularityVsScoreScatterChart';




import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size-sm="6" size-md="8" size-lg="10">
              <IonButton size="small" href="tab1">Home</IonButton><IonButton size="small" href="/tab2">Browse</IonButton><IonButton size="small" href="">Discover</IonButton><IonButton size="small" href="">News</IonButton>
              <SearchMovies />
              {/* <IonSearchbar animated={true} placeholder="Search Movies"></IonSearchbar> */}
              <h1>Popular</h1>
              <PopularMovies />
              <h1>Melhores Classificados</h1>
              <PopularityVsScoreChart></PopularityVsScoreChart>
              <PopularityVsScoreScatterChart></PopularityVsScoreScatterChart>
              <h1>Reviews Populares</h1>
              <IonList>
                <IonItem>
                  <IonAvatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonAvatar>
                  <IonLabel class="ion-text-wrap">
                    Multi-line text that should wrap when it is too long to fit on one line. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonAvatar>
                  <IonLabel class="ion-text-wrap">
                    Multi-line text that should wrap when it is too long to fit on one line. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonAvatar>
                  <IonLabel class="ion-text-wrap">
                    Multi-line text that should wrap when it is too long to fit on one line. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </IonLabel>
                </IonItem>
              </IonList>

              <IonFab slot="fixed" horizontal="center" vertical="center">
                <IonFabButton>
                  <IonIcon icon={add}></IonIcon>
                </IonFabButton>
                <IonFabList side="top">
                  <IonFabButton>
                    <IonIcon icon={chevronUp}></IonIcon>
                  </IonFabButton>
                </IonFabList>
                <IonFabList side="end">
                  <IonFabButton>
                    <IonIcon icon={chevronForward}></IonIcon>
                  </IonFabButton>
                  <IonFabButton>
                    <IonIcon icon={chevronForward}></IonIcon>
                  </IonFabButton>
                </IonFabList>
                <IonFabList side="bottom">
                  <IonFabButton>
                    <IonIcon icon={chevronDown}></IonIcon>
                  </IonFabButton>
                </IonFabList>
                <IonFabList side="start">
                  <IonFabButton>
                    <IonIcon icon={chevronBack}></IonIcon>
                  </IonFabButton>
                  <IonFabButton>
                    <IonIcon icon={chevronBack}></IonIcon>
                  </IonFabButton>
                </IonFabList>
              </IonFab>

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

    </IonPage>
  );
};

export default Tab1;
