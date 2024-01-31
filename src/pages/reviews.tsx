import React from "react";
import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';
import { IonDatetime } from '@ionic/react';


import ExploreContainer from '../components/ExploreContainer';

const reviews: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Evangelion: 3.0+1.0 Thrice Upon a Time</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonGrid>
            <IonRow class="ion-justify-content-center">
              <IonCol size-sm="6" size-md="8" size-lg="10">

                <h2>Review by: Miraiy</h2>
                <h3>Evangelion: 3.0+1.0 Thrice Upon a Time</h3>
                <p>O grande problema deste filme, é o simples facto que ele não oferece o mesmo impacto que a experiência do anime original. Anno tomou iniciativas bastante interessantes para com todo o projeto do Rebuild of Evangelion, mas colocou demasiado fermento na mistura. Isso tudo, resultou num trabalho com bastante texto para ler, que é nada justificado para a mensagem final e todos essas páginas amarelas, são apresentadas de formas nada imaginativas/com a devida personalidade, em comparação com os outros trabalhos do Anno. Esse ponto, toca também num outro problema que tenho com o filme, sendo a escala dos eventos. Tudo neste filme é de uma magnitude divinal, o que tira o fator de "choque" que poderiam causar. Tudo é uma ferramenta capaz de aniquilar com tudo a lá Thanos. Ao contrário da "causa efeito" do Thanos, as deste filme precisamos quase de um vídeo de 30 minutos do Youtube para explicar. Ao ver o filme, fiquei repleto da sensação de estar a perder alguma coisa importante, mas como já disse, acaba por ser irrelevante no grande esquema das coisas.
                  Meio que praticamente nenhum outro projeto do Anno, vai se comparar com o The End of Evangelion em especial nas longas metragens. Isso só torna-se correntes para o realizador, que o próprio desejou libertar-se com a concessão deste filme. Mas porra, tem Eva no título...é só lógico o fazer. Enfim...Um filme de 1h30m, sem tanta macacada, acredito que seria melhorzinho.</p>

                <IonGrid>
                  <IonRow>
                    <IonCol size="6">

                      <img src="evaposter.jpg"></img>

                    </IonCol>
                    <IonCol size="6">



                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
    </IonPage>
  )
}

export default reviews;