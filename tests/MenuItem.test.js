import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../client/components/MenuItem'

it('mounts', () => {
  const wrap = shallow(<MenuItem />
  );
  expect(wrap.exists());
});
