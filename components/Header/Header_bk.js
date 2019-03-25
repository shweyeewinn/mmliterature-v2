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
      showSignUpModal: false,
      showSignInModal: false,
    };
  }

  closeSignUpModal = () =>
    this.setState({
      showSignUpModal: false,
    });

  closeSignInModal = () =>
    this.setState({
      showSignInModal: false,
    });

  handleShowSignIn = () => {
    console.log('OK here');
    this.setState({ showSignInModal: true, showSignUpModal: false });
  };

  render() {
    console.log(this.state);
    const { showSignUpModal, showSignInModal } = this.state;
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
                  <a
                    className="menu-link"
                    onClick={() => this.setState({ showSignInModal: true })}
                  >
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
                  onClick={() => this.setState({ showSignUpModal: true })}
                >
                  SIGN UP
                </Button>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <style jsx>{``}</style> */}

        <SignInUp
          onShowSignIn={this.handleShowSignIn}
          show={showSignUpModal}
          onHide={this.closeSignUpModal}
        />

        {/* <SignIn show={showSignInModal} onHide={this.closeSignInModal} /> */}
      </HeaderStyle>
    );
  }
}

export default Header;
