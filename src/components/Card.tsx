import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  //IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  //IonButton
} from "@ionic/react";
// eslint-disable-next-line
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import {} from "ionicons/icons";
import ReactCardFlip from "react-card-flip";
import "./Card.css";

//import { createGesture, Gesture } from "@ionic/react";

interface ContainerProps {
  img: string;
  name: string;
  id: number;
  place: string;
}

const Card: React.FC<ContainerProps> = ({ img, id, name, place }) => {
  const [isFlipped, setFlip] = useState(true);

  const handleClick = () => {
    setFlip(!isFlipped);
    //console.log("Flip");
  };
  return (
    <IonCol size="2">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <IonCard onClick={handleClick} class="card">
          <img src={img} alt={name} />
          <IonCardHeader>
            {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
            <IonCardTitle>{name}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>{place}</IonCardContent>
        </IonCard>

        <IonCard onClick={handleClick} class="card">
          <img className="king"
            src="https://cutewallpaper.org/21/king-card-wallpaper/Pin-by-Wesley-Bowers-on-A-Bone-to-Pick-With-YOU-in-2019-.jpg"
            alt={name}
          />
          {/* <IonCardHeader>
            <IonCardTitle class="card-number">{id}</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader> */}

          {/* <IonCardContent>{id}</IonCardContent> */}
        </IonCard>
      </ReactCardFlip>
    </IonCol>
  );
};

export default Card;
