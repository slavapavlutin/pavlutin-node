import {
  addPost,
  requestPosts,
  requestPostsError,
  receivePosts,
  fetchPosts,
} from '../actions';
import Request from '../../../services/PostsAPI';

jest.mock('../../../services/PostsAPI');

Date.now = jest.fn(() => 1493591449079);

test('addPost returns action', () => {
  expect(addPost()).toMatchSnapshot();
});

test('requestPosts returns action', () => {
  expect(requestPosts()).toMatchSnapshot();
});

test('requestPostsError returns action', () => {
  expect(requestPostsError({})).toMatchSnapshot();
});

test('receivePosts returns action', () => {
  expect(receivePosts({ posts: [] })).toMatchSnapshot();
});

describe('fetchPosts', () => {
  const data = Request.data;
  const error = Request.error;
  const action = fetchPosts();

  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn(() => ({ posts: { isFetching: false } }));
  });

  it('requests posts', () => Promise.all([action(dispatch, getState)]).then(() => {
    expect(dispatch.mock.calls[0]).toEqual([requestPosts()]);
    expect(dispatch.mock.calls[1]).toEqual([receivePosts(data)]);
  }));

  it('does not requests posts if fetching', () => {
    getState.mockReturnValue({ posts: { isFetching: true } });
    action(dispatch, getState);
    expect(dispatch).not.toBeCalled();
  });

  it('emits error if request failed', () => {
    Request.fail();
    Promise.all([action(dispatch, getState)]).then(() => {
      expect(dispatch.mock.calls[0]).toEqual([requestPosts()]);
      expect(dispatch.mock.calls[1]).toEqual([requestPostsError(error)]);
    });
  });
});
