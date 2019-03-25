import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import Link from 'next/link';

class SignIn extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className="text-center modal-header-title">Welcome Back.</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
            Sign in to get personalized story recommendations, follow authors
            and topics you love, and interact with stories.
          </p>
          <div className="signupbuttons">
            <ButtonToolbar className="mt-2 mb-2 justify-content-center">
              <Button className="btn-white">
                <FontAwesomeIcon icon={['fab', 'google']} size="sm" /> Sign in
                with Google
              </Button>
            </ButtonToolbar>
            <ButtonToolbar className="mt-2 mb-2 justify-content-center">
              <Button className="btn-white">
                <FontAwesomeIcon icon={['fab', 'facebook']} size="sm" /> Sign in
                with Facebook
              </Button>
            </ButtonToolbar>
            <ButtonToolbar className="mt-2 mb-2 justify-content-center">
              <Button className="btn-white">
                <FontAwesomeIcon icon={['fab', 'github']} size="sm" /> Sign in
                with GitHub
              </Button>
            </ButtonToolbar>
          </div>
          <div className="mt-4 text-center">
            <p>
              No account?{' '}
              <Link href="/">
                <a className="menu-link">Create one</a>
              </Link>
            </p>
          </div>
          <div className="mt-4 text-center">
            <p>
              To make Myanmar Literature work, we log user data and share it
              with service providers. Click “Sign up” above to accept Terms of
              Service &amp; Privacy Policy of Myanmar Literature.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SignIn;
