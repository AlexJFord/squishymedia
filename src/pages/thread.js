import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { RootStateConsumer } from '../components/root-state';
import transformComments from '../util/transformComments';

const ThreadComment = ({ comment, onReply, onFavorite }) => {
  const [body, setBody] = useState('');
  const [subject, setSubject] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);
  return (
    <div
      id={comment.id}
      className="my-4 pl-4 text-black border-gray-500 border-l-2 border-solid"
    >
      <div className="flex justify-between">
        <h3 className="font-bold">{comment.subject}</h3>{' '}
        {comment.favorited ? (
          <span
            className="cursor-pointer text-xl text-yellow-500"
            onClick={() => onFavorite(comment.id)}
          >
            &#9733;
          </span>
        ) : (
          <span
            className="cursor-pointer text-xl text-yellow-500"
            onClick={() => onFavorite(comment.id)}
          >
            &#9734;
          </span>
        )}
      </div>
      <div>{comment.body}</div>

      <div className="text-gray-500 mb-4">{comment.user.name}</div>
      <button
        className="uppercase text-blue-500"
        onClick={() => setShowReplyForm(!showReplyForm)}
      >
        Reply
      </button>
      {showReplyForm && (
        <form
          onSubmit={e => {
            e.preventDefault();
            setSubject('');
            setBody('');
            setShowReplyForm(false);
            onReply({
              subject,
              body,
              parent: comment.id,
            });
          }}
        >
          <input
            autoFocus
            className="w-full bg-gray-300 p-2 my-3 shadow-inner"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <textarea
            className="w-full bg-gray-300 p-2 shadow-inner"
            placeholder="Comment"
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
          <div className="w-full flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Reply
            </button>
          </div>
        </form>
      )}
      {comment.comments.map(c => (
        <ThreadComment
          key={c.id}
          comment={c}
          onReply={onReply}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
};
const Thread = ({ location }) => {
  return (
    <Layout>
      <RootStateConsumer>
        {({ state, addComment, favoriteComment }) => (
          <div className="rounded bg-white shadow-md text-black py-4 px-4">
            <ThreadComment
              comment={transformComments(
                state.comments,
                state.favoriteComments,
                state.users
              ).find(c => c.id === location.state.id)}
              onReply={addComment}
              onFavorite={favoriteComment}
            />
            <Link to="/comments" className="text-blue-500 uppercase">
              Go Back
            </Link>
          </div>
        )}
      </RootStateConsumer>
    </Layout>
  );
};

export default Thread;
