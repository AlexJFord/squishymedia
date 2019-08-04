import React from 'react';
import { RootStateConsumer } from '../components/root-state';
import Layout from '../components/layout';
import Comment from '../components/comment';
import transformComments from '../util/transformComments';

const Comments = () => (
  <Layout>
    <RootStateConsumer>
      {({ state }) => {
        return transformComments(
          state.comments,
          state.favoriteComments,
          state.users
        ).map(comment => (
          <Comment key={comment.id} comment={comment}></Comment>
        ));
      }}
    </RootStateConsumer>
  </Layout>
);

export default Comments;
