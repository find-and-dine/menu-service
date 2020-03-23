import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App'

it('mounts', () => {
  const wrap = shallow(<App />
  );
  expect(wrap.exists());
});
