import React, { Component } from 'react';
import cont from "./container.css";
import {
  Container,
  Row,
} from 'reactstrap';
import Card from "../card"
import image from "./img.json"

class mainContainter extends Component {

  state = {
    image,
    score: 0,
    clicks: [],
  };





  handleCardClick = (id) => {
    let clickcount=this.state.clicks;
    clickcount.push(id);
    this.setState({clicks : clickcount})
    console.log(this.state.clicks);
    if (!this.state.clicks === id) {
      console.log(this.state.score);
      this.scoreKeep();
      console.log(this.state.score); 
    } else {
       this.setState({score: 0})
      console.log(this.state.score);

    }
    console.log(this.state.clicks)
  }


  scoreKeep = () => {
    let increment = this.state.score + 1;
    this.setState({ score: increment });
  }



  render() {

    return (
      <Container className={cont} style={{ width: "800px" }} >
        <Row>
          {this.state.image.map(item => {
            return <Card src={item.img} key={item.id} id={item.id} handleClick={this.handleCardClick} />
          })}
        </Row>
      </Container>

    )
  }
}



export default mainContainter;