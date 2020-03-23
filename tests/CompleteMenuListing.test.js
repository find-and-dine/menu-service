import React from 'react';
import { shallow } from 'enzyme';
import CompleteMenuListing from '../client/components/CompleteMenuListing';
import sampleRestaurant from './setup/sampleRestaurant';




it('mounts', () => {
  const wrap = shallow(
    <CompleteMenuListing
      menu={sampleRestaurant.menus[0]}
    />
  );
  expect(wrap.exists());
});
