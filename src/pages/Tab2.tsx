import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonSelect, IonSelectOption } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonSearchbar } from '@ionic/react';
import { IonProgressBar } from '@ionic/react';



import PopularMoviesGrid from '../components/PopularMoviesGrid';
import SearchMovies from '../components/SearchMovies';







import './Tab2.css';



const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Films</IonTitle>
          <IonProgressBar type="indeterminate"></IonProgressBar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size-sm="6" size-md="8" size-lg="10">



              <IonGrid>
                <IonRow>
                  <IonCol><IonList>
                    <IonItem>
                      <IonSelect label="Filter By" placeholder="">
                        <IonSelectOption value="year">Year</IonSelectOption>
                        <IonSelectOption value="rating">Rating</IonSelectOption>
                        <IonSelectOption value="popular">Popular</IonSelectOption>
                        <IonSelectOption value="genre">Genre</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList></IonCol>
                  <IonCol><SearchMovies></SearchMovies></IonCol>
                </IonRow>
              </IonGrid>

              <h2>Popular This Week</h2>
              <PopularMoviesGrid></PopularMoviesGrid>

              <h2>Popular Reviews This Week</h2>

              <IonItem>
                <a href="/reviews"><img alt="" src="evaposter.jpg" slot="start" /></a>
                <IonLabel class="ion-text-wrap">
                  <h3>Evangelion: 3.0+1.0 Thrice Upon a Time</h3>
                  <p >O grande problema deste filme, é o simples facto que ele não oferece o mesmo impacto que a experiência do anime original. Anno tomou iniciativas bastante interessantes para com todo o projeto do Rebuild of Evangelion, mas colocou demasiado fermento na mistura. Isso tudo, resultou num trabalho com bastante texto para ler, que é nada justificado para a mensagem final e todos essas páginas amarelas, são apresentadas de formas nada imaginativas/com a devida personalidade, em comparação com os outros trabalhos do Anno. Esse ponto, toca também num outro problema que tenho com o filme, sendo a escala dos eventos.</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <img alt="" src="5cmposter.jpg" slot="start" />
                <IonLabel class="ion-text-wrap">
                  <h3>5 Centimeters per Second</h3>
                  <p>O "primeiro episódio" é o Peak Shinkai. Tem as macacadas de ficção científica dele, o casal amoroso épico e a fotografia não é padronizada (Mise en Cène CARALHO). O estilo gráfico, também é, na minha opinião, o mais belo dele. Os restantes filmes, tem todos uma qualidade plástica e corporativa que não casa com a beleza dos planos foto realista do nosso conpincha. Ele aqui também não tinha entrado no "Shinkaiverso", portanto não temos as explicações de mundo merda que ele coloca goela abaixo. Show Don't Tell e o resto é só desnecessário.
                    Os restantes "dois episódios" vão perdendo a qualidade gradualmente. Não sei se isto é um sinónimo do meu desinteresse para com o filme em si ou se realmente perdeu qualidade. São eventos nada memoráveis e fracos em comparação com o episódio anterior.</p>
                </IonLabel>
              </IonItem>

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

export default Tab2;
