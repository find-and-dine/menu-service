import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import Footer from './Footer';
import MenuPreview from './MenuPreview';
import MenuModal from './MenuModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theseMenus: [],
      menuLoaded: false,
      showModal: false,
    };
    this.getMenus = this.getMenus.bind(this);
    this.conditionalRender = this.conditionalRender.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    // TODO: get current menu from props
    this.getMenus(9);
    ReactModal.setAppElement('body');
  }

  getMenus(id) {
    axios.get(`/api/menu/${id}`)
      .then((data) => {
        this.setState({
          theseMenus: data.data[0].menus,
          menuLoaded: true,
        });
      })
      // eslint-disable-next-line no-console
      .catch(console.log);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  conditionalRender() {
    const { theseMenus, menuLoaded, showModal } = this.state;
    const firstSection = menuLoaded ? theseMenus[0].sections[0] : '';

    // Only attempts to render once component mounts and state updates
    return menuLoaded
      ? (
        <div>
          <ReactModal
            isOpen={showModal}
            contentLabel="fullMenu"
          >
            <MenuModal
              menus={theseMenus}
              handleCloseModal={this.handleCloseModal}
              handKeyPress={this.handleKeyPress}
            />
          </ReactModal>
          <div
            className="menuServiceAppBlock"
            role="button"
            tabIndex={0}
            onClick={this.handleOpenModal}
            onKeyPress={this.handleKeyPress}
          >
            <h2>Menu</h2>
            <div className="dividerBorder" />
            <MenuPreview section={firstSection} />
            <div className="dividerBorder" />
            <Footer />
          </div>
        </div>
      )
      : <div>loading menu</div>;
  }

  render() {
    return this.conditionalRender();
  }
}

export default App;
