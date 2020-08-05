import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { IonGrid, IonRow } from "@ionic/react";
import Card from "../components/Card";
import "./Tab1.css";

const Tab1: React.FC = () => {
  // eslint-disable-next-line
  const [monuments, setmonuments] = useState([
    {
      name: "Qutub Minar",
      id: 1,
      place: "Delhi",
      img:
        "https://imgcld.yatra.com/ytimages/image/upload/t_monuments_srplist/v1514014955/Monuments/newdelhi/e591210d-5bb7-4642-aba8-06d9ff895464/1_FYUuFf.jpg"
    },
    {
      name: "Gate Way of India",
      id: 2,
      place: "Mumbai",
      img:
        "https://www.travelogyindia.com/images/mumbai/gateway-of-india-tipl-1.jpg"
    },
    {
      name: " Chittaurgarh Fort",
      id: 3,
      place: "Chittaurgarh",
      img:
        "https://imgcld.yatra.com/ytimages/image/upload/t_monuments_srplist/v1514567831/Monuments/Cittorgarh/ba070497-b8ed-4237-9427-7d1e67becb59/1_R4fUNl.jpg"
    },
    {
      name: "Red Fort Complex",
      id: 4,
      place: "New Delhi",
      img:
        "https://imgcld.yatra.com/ytimages/image/upload/t_monuments_srplist/v1514015044/Monuments/newdelhi/1e25a26a-8686-40c3-b42a-bf4cb212a2a0/4_QqdiDt.jpg"
    },
    {
      name: "Shaniwarwada",
      id: 5,
      place: "Pune",
      img:
        "https://imgcld.yatra.com/ytimages/image/upload/t_monuments_srplist/v1514641770/Monuments/Shaniwarwada/c434c346-d64a-4ed8-b588-a1b04a995fec/1_lZhcXf.jpg"
    },
    {
      name: "Taj Mahal",
      id: 6,
      place: "Agra",
      img:
        "https://imgcld.yatra.com/ytimages/image/upload/t_monuments_srplist/v1514015176/Monuments/agra/c632aef9-5c4f-44a4-89cc-697ef17457d0/4_8LV2kR.jpg"
    }
  ]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Play Card Flip Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow className="ion-align-items-center">
            {monuments.map(monument => {
              return <Card {...monument} key={monument.id}></Card>;
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
