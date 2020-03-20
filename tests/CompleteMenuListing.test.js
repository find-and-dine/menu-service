import React from 'react';
import { shallow } from 'enzyme';
import CompleteMenuListing from '../client/components/CompleteMenuListing'

it('mounts', () => {
  const wrap = shallow(<CompleteMenuListing />
  );
  expect(wrap.exists());
});
