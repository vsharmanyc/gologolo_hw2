import React from 'react'
import {Modal, Button} from 'react-materialize'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  trashClicked = () => {
    this.props.deleteLogoFunction(this.props.logo.key);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Modal header="Delete Logo?" modal-close="false" trigger={<li style={ {cursor: "pointer"} }>&#128465;</li>}>
                            <p>
                                Deleting a logo is an irreversible action<br></br><br></br>
                                <Button
                                    node="a"
                                    waves="light"
                                    small
                                    style={{ marginRight: '5px' }}
                                    onClick={this.trashClicked}
                                >Yes</Button>

                                <Button
                                    node="a"
                                    waves="light"
                                    small
                                    style={{ marginRight: '5px' }}
                                    modal="close"
                                >Cancel</Button>

                            </p>
            </Modal>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;