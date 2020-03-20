import React from 'react';
import axios from 'axios';
// import StyledDivider from './Divider';
import Footer from './Footer';
import MenuPreview from './MenuPreview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theseMenus: [],
      menuLoaded: false,
    };
    this.getMenus = this.getMenus.bind(this);
    this.conditionalRender = this.conditionalRender.bind(this);
  }

  componentDidMount() {
    // TODO: get current menu from props
    this.getMenus(9);
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

  conditionalRender() {
    const { theseMenus, menuLoaded } = this.state;
    const firstSection = menuLoaded ? theseMenus[0].sections[0] : '';

    // Only attempts to render once component mounts and state updates
    return menuLoaded
      ? (
        <div className="menuServiceAppBlock">
          <h2>Menu</h2>
          <div className="dividerBorder" />
          <MenuPreview section={firstSection} />
          <div className="dividerBorder" />
          <Footer />
        </div>
      )
      : <div>loading menu</div>;
  }

  render() {
    return this.conditionalRender();
  }
}

export default App;
