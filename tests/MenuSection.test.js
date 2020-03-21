import React from 'react';
import { shallow } from 'enzyme';
import MenuSection from '../client/components/MenuSection';
import SampleRestaurant from './setup/SampleRestaurant';

const sampleSection = SampleRestaurant.menus[0].sections[0];

it('mounts', () => {
  const wrap = shallow(
    <MenuSection
      section={sampleSection}
    />
  );
  expect(wrap.exists());
});
