import React, { useState } from 'react';
import { Link } from 'gatsby';

const Comment = ({ comment }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="my-4 rounded p-4 bg-white shadow-md text-black">
      <div className="flex justify-between items-center">
        <Link to="/thread" state={{ id: comment.id }}>
          {comment.subject}
        </Link>
        <span
          className="uppercase cursor-pointer text-xs text-blue-400"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'show less' : 'show more'}
        </span>
      </div>
      {showMore && (
        <>
          {' '}
          <div className="mt-4">
            <strong>Commenters</strong> {comment.commenters.join(', ')}
          </div>
          <div className="mt-4">
            <strong>Favorite Comments?</strong>{' '}
            {comment.hasFavorite ? 'Yes' : 'No'}
          </div>
        </>
      )}
    </div>
  );
};

export default Comment;
