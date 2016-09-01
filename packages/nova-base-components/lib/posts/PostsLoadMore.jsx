import React from 'react';
import {FormattedMessage} from 'react-intl';

const PostsLoadMore = ({loadMore, count, totalCount}) => {
    return (
      <a className="posts-load-more" onClick={loadMore}>Show More…</a>
      //<a className="posts-load-more" >
      //    <span><FormattedMessage id="posts.load_more"/></span>
      //    &nbsp;
      //    {totalCount ? <span className="load-more-count">{`(${count}/${totalCount})`}</span> : null}
      //</a>
    )
};

PostsLoadMore.displayName = "PostsLoadMore";

module.exports = PostsLoadMore;