
import React from "react";
import card from "./card.css";
import { Col } from 'reactstrap';



//sets state to 0 or empty
const Card = props => {
  {/*console.log(props);*/}
  return <Col className={"col-3 " + card}>
    <img src={props.src}
      id={props.id}
      key={props.id}
      onClick={() => props.handleClick(props.id)}
      alt=""
    />
  </Col>
}



export default Card; 