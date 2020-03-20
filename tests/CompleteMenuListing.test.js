import React from 'react';
import { shallow } from 'enzyme';
import CompleteMenuListing from '../client/components/CompleteMenuListing'

const dummyProps = {
  menu: {
    sections: ['one', 'two', 'three']
  }
};

it('mounts', () => {
  const wrap = CompleteMenuListing(dummyProps);
  expect(wrap.exists());
});
