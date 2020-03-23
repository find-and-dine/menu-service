import React from 'react';
import { shallow } from 'enzyme';
import MenuModal from '../client/components/MenuModal';
import sampleRestaurant from './setup/sampleRestaurant';

const dummyFunction = () => {
  return {};
};

it('sets state', () => {
  const wrap = new MenuModal(sampleRestaurant);

  expect(wrap.state.menus.length).toBe(2);

  expect(Object.keys(wrap.state).length).toBe(4);
});

it('mounts', () => {
  const wrap = shallow(
    <MenuModal
      menus={sampleRestaurant.menus}
      handleCloseModal={dummyFunction}
      handleKeyPress={dummyFunction}
    />
  );
  expect(wrap.exists());
});
