import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer'

describe('Footer component', () => {
  it('mounts'() => {
    const wrap = shallow(
      <Footer />
    )
    expect(wrap.containsMatchingElement(
      <span className="previewFooterItem">
        Show full menu
    </span>
    )
      .toBeTruthy()
    )
  })
});
