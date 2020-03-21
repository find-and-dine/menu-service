import React from 'react';
import { shallow } from 'enzyme';
import MenuPreviewItem from '../client/components/MenuPreviewItem'
import sampleRestaurant from './setup/sampleRestaurant'

const sampleMenuItem = sampleRestaurant.menus[0].sections[0].menuItems[0];

it('mounts', () => {
  const wrap = shallow(
    <MenuPreviewItem
      menuItem={sampleMenuItem}
    />
  );
  expect(wrap.exists());
});
