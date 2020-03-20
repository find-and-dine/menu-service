import React from 'react';
import { shallow } from 'enzyme';
import MenuModal from '../client/components/MenuModal'

it('mounts', () => {
  const wrap = shallow(<MenuModal />
  );
  expect(wrap.exists());
});
