import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped; //se reasigna en cada llamada
//si la uso dentro de la funcion podria ser const pero el scope no llega a los otros
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  //const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  //const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
