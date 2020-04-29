import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actios of type save comment', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new commentary',
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(['new commentary']);
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], {}); // podria ser un objeto con otro type
  expect(newState).toEqual([]);
});
