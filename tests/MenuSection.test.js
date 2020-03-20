import React from 'react';
import { shallow } from 'enzyme';
import MenuSection from '../client/components/MenuSection'

it('mounts', () => {
  const wrap = shallow(<MenuSection />
  );
  expect(wrap.exists());
});
