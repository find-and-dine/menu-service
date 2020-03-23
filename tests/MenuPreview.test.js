import React from 'react';
import { shallow } from 'enzyme';
import MenuPreview from '../client/components/MenuPreview'
import sampleRestaurant from './setup/sampleRestaurant'

it('mounts', () => {
  const wrap = shallow(
    <MenuPreview
      section={sampleRestaurant.menus[0].sections[0]}
    />
  );
  expect(wrap.exists());
});
