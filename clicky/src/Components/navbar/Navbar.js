import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import navbarCss from './navbar.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className={{ navbarCss }}>
          <NavbarBrand href="/" className="mr-auto txt"><b>Clicky Game</b></NavbarBrand>
          <NavbarBrand href="/" className="mc-auto txt">Click an image to begin!</NavbarBrand>
          <NavbarBrand href="/" className="ml-auto txt">Score:{/*this.props.score*/} | Top Score: {/*props.top*/}</NavbarBrand>

        </Navbar>
      </div>
    );
  }
}