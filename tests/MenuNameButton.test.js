import React from 'react';
import { shallow } from 'enzyme';
import MenuNameButton from '../client/components/MenuNameButton'

it('mounts', () => {
  const wrap = shallow(<MenuNameButton />
  );
  expect(wrap.exists());
});
