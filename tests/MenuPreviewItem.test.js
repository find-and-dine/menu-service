import React from 'react';
import { shallow } from 'enzyme';
import MenuPreviewItem from '../client/components/MenuPreviewItem'

it('mounts', () => {
  const wrap = shallow(<MenuPreviewItem />
  );
  expect(wrap.exists());
});
