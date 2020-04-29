import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'com1' }, { name: 'com2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the 'fetch' button and click it
  wrapped.find('.fetch-button').simulate('click');
  // necesito una pausa para moxios enviando el response
  moxios.wait(() => {
    // tengo que actualizar
    wrapped.update();
    // expecto to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);
    done();
    // desmontar
    wrapped.unmount();
  });
});
