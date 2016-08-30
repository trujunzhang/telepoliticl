import React from 'react';
import {ListContainer} from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";

const PostDetail = () => {

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
                              <img className="placeholder_E_0qw" height="315"
                                   src="http://www.dailypioneer.com/uploads/main/cl_story_image/T330_8868_Untitled-5.gif"
                                   width="177.32517482517483"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/*post's content*/}
          <section className="container_3tEOd">
              <div>
                  <p>
                      The Supreme Court’s affirmation on Saturday of its 2014 view in cases related to dowry harassment
                      or death — that the police should not arrest the husband and his close relations until it is
                      satisfied that the complaint is genuine — disturbs its reputation for effectively aiding those in
                      need of justice.\n\nIn 1983, our law-makers strengthened Section 498A of the Dowry Prohibition
                      Act, 1961 to include the automatic arrest of husband and his immediate family in case of dowry
                      deaths or complaints of violence.\n\nReports of young women being burned to death for their
                      parents’ inability to furnish the demanded dowry by avaricious in-laws, or subjected to gruesome
                      domestic violence, had filled the media in the intervening years. The society had mounted a
                      massive campaign to fight the evil of bride-burning.\n\nFollowing complaints that the law is being
                      misused by some women, the Supreme Court is now, in effect,
                  </p>
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
