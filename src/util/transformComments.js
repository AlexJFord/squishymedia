/**
 * The purpose of this function is to transform our data into a structure
 * that makes dealing with it more convenient in our React components.
 * @param {Array} comments
 * @param {Array} favoriteComments
 * @param {Array} users
 */
function transformComments(comments = [], favoriteComments = [], users = []) {
  const rootComments = comments.filter(comment => !comment.parent);
  rootComments.forEach(comment => {
    comment.comments = [];
    comment.commenters = [];
    comment.favorited = false;
    comment.hasFavorite = false;

    if (favoriteComments.includes(comment.id)) {
      comment.hasFavorite = true;
      comment.favorited = true;
    }

    comment.user = users.find(user => user.id === comment.author);

    if (comment.user && !comment.commenters.includes(comment.user.name)) {
      comment.commenters.push(comment.user.name);
    }

    recTransformComments(
      [...comments],
      comment,
      comment,
      [...favoriteComments],
      [...users]
    );
  });

  return rootComments;
}

function recTransformComments(
  comments,
  parentComment,
  rootComment,
  favoriteComments,
  users
) {
  parentComment.comments = comments.filter(
    comment => comment.parent === parentComment.id
  );
  parentComment.comments.forEach(comment => {
    comment.comments = [];
    comment.favorited = false;

    if (favoriteComments.includes(comment.id)) {
      rootComment.hasFavorite = true;
      comment.favorited = true;
    }

    comment.user = users.find(user => user.id === comment.author);

    if (comment.user && !rootComment.commenters.includes(comment.user.name)) {
      rootComment.commenters.push(comment.user.name);
    }

    recTransformComments(
      comments,
      comment,
      rootComment,
      favoriteComments,
      users
    );
  });
}
export default transformComments;
