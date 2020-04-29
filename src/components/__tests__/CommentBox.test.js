import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('has a textarea and 2 buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('the textarea', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }, //destructuring de event
    });
    wrapper.update();
  });

  it('has a textarea that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submited textarea gets empty', () => {
    const form = wrapper.find('form').first();
    form.simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
