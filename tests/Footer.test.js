import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../client/components/Footer'


it('mounts', () => {
  const wrap = shallow(<Footer />
  );

  // TODO: come back and debug matchingElement test
  expect(wrap.containsMatchingElement(
    <div className="previewFooter">
      <img
        src="../resources/menuIcon.png"
        alt=""
        height="18px"
        width="auto"
      />
      <span className="previewFooterItem">
        Show full menu
          </span>
    </div>
  )
  ).toBeTruthy()
});

