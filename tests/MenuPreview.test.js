import React from 'react';
import { shallow } from 'enzyme';
import MenuPreview from '../client/components/MenuPreview'

it('mounts', () => {
  const wrap = shallow(<MenuPreview />
  );
  expect(wrap.exists());
});
