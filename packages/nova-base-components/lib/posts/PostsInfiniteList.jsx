import React, {PropTypes, Component} from 'react';

import InfiniteScroll from 'react-infinite-scroller'

class PostsInfiniteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.results,
            currentPage: 1,
            isLoadingMore: false,
            hasMoreItems: true,
        }
        this.loadItems = this.loadItems.bind(this);
    }

    /**
     * render the Loading block when fetching the posts.
     * @returns {XML}
     */
    renderLoading() {
        return (
          <div>
              <span className="loading_2hQxH featured_2W7jd subtle_1BWOT base_3CbW2">Hunting down posts...</span>
          </div>
        )
    }

    /**
     * Showing no results panel.
     * @returns {XML}
     */
    renderNoResults() {
        return (
          <div><span className="loading_2hQxH featured_2W7jd subtle_1BWOT base_3CbW2">No posts to display.</span></div>
        )
    }

    /**
     * two panels
     * == left panel
     * == right panel
     *
     * @param results
     * @param currentUser
     * @param hasMore
     * @param ready
     * @param count
     * @param totalCount
     * @param loadMore
     * @returns {XML}
     */
    renderPostsList(results, currentUser, hasMore, ready, count, totalCount, loadMore) {
        return (
          <div>
              <div className="fullWidthBox_3Dggh box_c4OJj">
                  <div className="content_DcBqe">
                      <Telescope.components.PostsListTitle/>
                      <div className="posts_275PF">
                          <ul className="postsList_2tOc7">
                              {results.map(post =>
                                <li>
                                    <Telescope.components.PostsItem post={post}
                                                                    currentUser={currentUser}
                                                                    key={post._id}/>
                                </li>
                              )}
                          </ul>
                      </div>
                      {hasMore ? (ready ? <Telescope.components.PostsLoadMore loadMore={loadMore} count={count}
                                                                              totalCount={totalCount}/> :
                        <Telescope.components.PostsLoading/>) : <Telescope.components.PostsNoMore/>}
                  </div>
              </div>
          </div>
        )
    }

    loadItems() {
        if (this.state.isLoadingMore) {
            return;
        }

        this.setState({isLoadingMore: true})

        //this.setState({ list: [...this.state.list, ...[newObject]] });
        let num = this.state.currentPage;
        let fetchedPosts = Posts.find().fetch();
        //.map(function (post, index) {
        //    let id = post._id;
        //    //post._id = num * 10 + index;
        //    //post.title = num * 10 + index;
        //    return post;
        //})
        this.setState({
            posts: [...this.state.posts, ...[fetchedPosts]],
            currentPage: this.state.currentPage + 1,
            isLoadingMore: false
        })
    }

    render() {
        //const loader = <div><span
        //  className="loading_2hQxH featured_2W7jd subtle_1BWOT base_3CbW2">No posts to display.</span></div>
        //return (
        //  <InfiniteScroll
        //    threshold={80}
        //    pageStart={0}
        //    loadMore={this.props.loadMore}
        //    hasMore={this.state.hasMoreItems}
        //    loader={loader}>
        //
        //      {this.renderPostsList(this.state.posts, this.props.currentUser, this.props.hasMore, this.props.ready, this.props.count, this.props.totalCount, this.props.loadMore)}
        //
        //  </InfiniteScroll>
        //)

        let results = this.props.results;
        let ready = this.props.ready;
        if (!!results.length) {
            return this.renderPostsList(this.props.results, this.props.currentUser, this.props.hasMore, this.props.ready, this.props.count, this.props.totalCount, this.props.loadMore);
        } else if (!ready) {
            return this.renderLoading();
        } else {
            return this.renderNoResults();
        }
    }
}

module.exports = PostsInfiniteList;
export default PostsInfiniteList;
