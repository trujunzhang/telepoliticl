import React from 'react';
import Posts from "meteor/nova:posts";

const PostsThumbnail = ({post}) => {
    return (

      <div className="container__Ql6q lazyLoadContainer_3KgZD">
          <img height="80" src={Posts.getThumbnailUrl(post)} width="80"/>
      </div>
    )
};

PostsThumbnail.displayName = "PostsThumbnail";

module.exports = PostsThumbnail;
export default PostsThumbnail;