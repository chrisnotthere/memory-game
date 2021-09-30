import React from "react";
import '../styles/Main.css'
import { Card, Button } from "react-bootstrap";
import image from '../images/MK8 Baby Peach.png';

const Main = () => {


  return (
    <main>

      <p>this is the main component</p>

      <div class="card">
        <img src={image} alt="charName" ></img>
        <div class="w3-container w3-center">
          <p>The Italian / Austrian Alps</p>
        </div>
      </div>


      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>Baby Peach</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


    </main>
  )
}

export default Main;
