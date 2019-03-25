import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

import HeaderStyle from './HeaderStyle';
import SignInUp from '../SignInUp/SignInUp';
// import SignIn from '../SignInUp/SignIn_bk';

import { Image, Navbar, Nav, Button, Container } from 'react-bootstrap';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignInUpModal: false,
      signInShow: false,
      signUpShow: false,
    };
    this.handleShowSignIn = this.handleShowSignIn.bind(this);
    this.handleShowSignUp = this.handleShowSignUp.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
  }

  closeSignUpModal = () =>
    this.setState({
      showSignInUpModal: false,
      signInShow: false,
      signUpShow: false,
    });

  handleShowSignIn = () => {
    this.setState({
      showSignInUpModal: true,
      signInShow: true,
      signUpShow: false,
    });
  };

  handleShowSignUp = () => {
    this.setState({
      showSignInUpModal: true,
      signInShow: false,
      signUpShow: true,
    });
  };

  render() {
    // console.log(this.state);
    const { showSignInUpModal } = this.state;
    return (
      <HeaderStyle>
        <Navbar expand="lg" className="scrolling-navbar">
          <Container>
            <Navbar.Brand href="/">
              <Image
                src="/static/logo/logo.png"
                width="150px"
                height="auto"
                className="d-inline-block align-top"
                alt="Myanmar Literature"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link href="/">
                  <a className="menu-link">Home</a>
                </Link>
                <Link href="/about">
                  <a className="menu-link">About</a>
                </Link>
                <Link href="/category">
                  <a className="menu-link">Categories</a>
                </Link>
              </Nav>

              <Nav>
                <Link href="/">
                  <a className="menu-link" onClick={this.handleShowSignIn}>
                    Sign in
                  </a>
                </Link>
              </Nav>
              {/* <Navbar.Text>
                <Link href="/">
                  <a>AAAA</a>
                </Link>
              </Navbar.Text> */}
              <Link href="/">
                <Button
                  size="md"
                  className="btn btn-signup"
                  onClick={this.handleShowSignUp}
                >
                  SIGN UP
                </Button>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <style jsx>{``}</style> */}

        <SignInUp
          onShowSignIn={this.state.signInShow}
          onShowSignUp={this.state.signUpShow}
          show={showSignInUpModal}
          onHide={this.closeSignUpModal}
        />
      </HeaderStyle>
    );
  }
}

export default Header;
