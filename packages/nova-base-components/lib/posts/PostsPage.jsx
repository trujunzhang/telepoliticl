import React from 'react';
import Posts from "meteor/nova:posts";

const PostsPage = ({document, currentUser}) => {

    const post = document;
    const htmlBody = {__html: post.htmlBody};

    //return (
    //  <div className="posts-page">
    //
    //    <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
    //
    //    <Telescope.components.PostsItem post={post}/>
    //
    //    <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div>
    //
    //    {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}
    //
    //    <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>
    //
    //  </div>
    //)

    return (
      <div className="content_3X9xi">

          <div className="container_2uJxj">
              <section className="postSection_1iIbk">
                  <div className="sectionContent_21Amp">
                      {/* Top top */}
                      <div>
                          {/*header block*/}
                          <Telescope.components.PostsSingleHeader post={post} user={currentUser}/>
                      </div>
                      <div className="constraintWidth_ZyYbM body_1a08C">
                          {/*middle left*/}
                          <Telescope.components.PostDetail post={post} user={currentUser}/>
                      </div>

                  </div>
              </section>
              <section className="popularTodaySection_30n6J">
                  <div className="sectionContent_21Amp">


                  </div>
              </section>
          </div>

      </div>
    )
};

PostsPage.displayName = "PostsPage";

module.exports = PostsPage;
export default PostsPage;