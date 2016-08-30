import React from 'react';
import Posts from "meteor/nova:posts";

const PostsThumbnail = ({post}) => {
    return (

      <div className="container__Ql6q lazyLoadContainer_3KgZD">
          <img height="80" src={Posts.getThumbnailUrl(post)} width="80"/>
      </div>

      //<a className="posts-thumbnail" href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
      //    <span><img src={Posts.getThumbnailUrl(post)} /></span>
      //  </a>
    )
}

PostsThumbnail.displayName = "PostsThumbnail";

module.exports = PostsThumbnail;
export default PostsThumbnail;