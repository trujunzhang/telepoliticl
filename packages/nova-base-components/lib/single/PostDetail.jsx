import React from 'react';
import {ListContainer} from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";

const PostDetail = (document, currentUser) => {
    const post = document.post;
    const thumbnailUrl = post.thumbnailUrl;
    const htmlBody = {__html: post.htmlBody};

    return (
      <main className="main_3lfDa">
          {/*post's tags*/}
          <Telescope.components.PostTagItem/>
          {/*post's image*/}
          <section className="container_3tEOd">
              <div>
                  <div className="canvasWrapper_3pQxU">
                      <div className="canvas_3tuA5">
                          <div className="container_22rD3 post_image">
                              <img className="placeholder_E_0qw" height="315" src={thumbnailUrl} width="auto"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/*post's content*/}
          <section className="container_3tEOd">
              <div dangerouslySetInnerHTML={htmlBody}>
              </div>
          </section>
          {/*post's comments*/}
          {/*<Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>*/}
      </main>
    )
}

PostDetail.displayName = "PostDetail";

module.exports = PostDetail;
export default PostDetail;
