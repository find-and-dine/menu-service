/* eslint-disable react/prop-types */
import React from 'react';
import MenuNameButton from './MenuNameButton';
import CompleteMenuListing from './CompleteMenuListing';

class MenuModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: props.menus,
      handleCloseModal: props.handleCloseModal,
      handleKeyPress: props.handleKeyPress,
      currentMenu: props.menus[0].menuName,
    };
    this.changeCurrentMenu = this.changeCurrentMenu.bind(this);
  }

  changeCurrentMenu(menu) {
    this.setState({
      currentMenu: menu,
    });
  }

  render() {
    const {
      menus, currentMenu, handleCloseModal, handleKeyPress,
    } = this.state;
    const menuNames = menus.map((menu) => (menu.menuName));
    return (
      <div className="modal">
        <div className="menuModalHeader">
          <span>Menu</span>
          <span
            id="closeModal"
            role="button"
            tabIndex={0}
            onClick={handleCloseModal}
            onKeyPress={handleKeyPress}
          >
            &times;
          </span>
        </div>
        <div className="menuOptions">
          {menuNames.map((menuName) => (
            <MenuNameButton
              selected={currentMenu}
              menuName={menuName}
              changeMenu={this.changeCurrentMenu}
              key={menuName}
            />
          ))}
        </div>
        <div className="menuSectionsContainer">
          <div className="menuSections">
            <CompleteMenuListing menu={menus[menuNames.indexOf(currentMenu)]} />
          </div>
          <div className="dividerBorder" />
        </div>
        <div className="menuModalFooter">
          <img
            src="../resources/poweredBy.png"
            alt=""
            height="38px"
            width="auto"
          />
        </div>
      </div>
    );
  }
}

export default MenuModal;
