import React, {PropTypes, Component} from 'react';
import {FlashContainer} from "meteor/nova:core";
import {DocumentContainer} from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

class Layout extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.context.messages.layout = this;
        this.state = this.initialState = {
            isSearching: false,
            cachePost: null,
        };
    }

    componentDidMount() {
        //const postId = "67964fa0bd17c1e8b5f5528c8343ec1d";
        //this.showCurrentPostPanel(postId);
    }

    dismissCurrentPostPanel() {
        this.context.messages.dismissPostPanel();
    }

    showCurrentPostPanel(postId) {
        this.context.messages.pushAndPostShow(postId);
    }

//<Telescope.components.PostsPopup document={this.state.cachePost}/>

    renderPostSingle(cachePost) {
        const postId = cachePost.postId;
        const params = {
            _id: postId
        };
        return (
          <DocumentContainer
            collection={Posts}
            publication="posts.single"
            selector={{_id: postId}}
            terms={params}
            joins={Posts.getJoins()}
            component={Telescope.components.PostsPage}
            loading={<div className="placeholder_1WOC3">
                <div className="loader_54XfI animationRotate loader_OEQVm"></div>
            </div>}
          />
        )
    }

    renderPosts() {
        if (this.state.cachePost != null) {
            return (
              <div className="overlay_1AkSl modal-spotlight">
                  <a className="closeDesktop_XydFN" title="Close" data-test="modal-close"
                     onClick={this.dismissCurrentPostPanel.bind(this)}>
                <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 4.586l4.24-4.24c.395-.395 1.026-.392 1.416-.002.393.393.39 1.024 0 1.415L7.413 6l4.24 4.24c.395.395.392 1.026.002 1.416-.393.393-1.024.39-1.415 0L6 7.413l-4.24 4.24c-.395.395-1.026.392-1.416.002-.393-.393-.39-1.024 0-1.415L4.587 6 .347 1.76C-.05 1.364-.048.733.342.343c.393-.393 1.024-.39 1.415 0L6 4.587z"
                          fill-rule="evenodd"></path>
                    </svg>
                </span>
                  </a>
                  <a className="closeMobile_15z3i" title="Close" data-test="modal-close"
                     onClick={this.dismissCurrentPostPanel.bind(this)}>
                <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 4.586l4.24-4.24c.395-.395 1.026-.392 1.416-.002.393.393.39 1.024 0 1.415L7.413 6l4.24 4.24c.395.395.392 1.026.002 1.416-.393.393-1.024.39-1.415 0L6 7.413l-4.24 4.24c-.395.395-1.026.392-1.416.002-.393-.393-.39-1.024 0-1.415L4.587 6 .347 1.76C-.05 1.364-.048.733.342.343c.393-.393 1.024-.39 1.415 0L6 4.587z"
                          fill-rule="evenodd"></path>
                    </svg>
                </span>
                  </a>
                  {this.renderPostSingle(this.state.cachePost)}
              </div>
            )
        }
        return null;
    }

    render() {
        let classValue = "wrapper";
        if (this.state.isSearching) {
            classValue += " search-mode";
        }
        if (this.state.cachePost) {
            classValue += " no-scroll";
        }

        return (
          <div className={classValue} id="wrapper">

              <Telescope.components.HeadTags />

              <Telescope.components.UsersProfileCheck {...this.props} />

              <div>
                  <Telescope.components.Header {...this.props} />
                  {/*<Telescope.components.UserLogin />*/}
              </div>

              <div className={this.state.isSearching ? 'overlayActive_oQWJ3' : 'overlayInactive_1UI7W'}></div>
              {this.renderPosts()}
              <div >
                  <div className="constraintWidth_ZyYbM container_3aBgK">
                      <FlashContainer component={Telescope.components.FlashMessages}/>
                  </div>

                  <Telescope.components.Newsletter />
                  <div className="constraintWidth_ZyYbM container_3aBgK">
                      {this.props.children}
                  </div>

              </div>

              <Telescope.components.Footer {...this.props}/>

          </div>
        )

    }
}

Layout.contextTypes = {
    messages: React.PropTypes.object
};

Layout.displayName = "Layout";

module.exports = Layout;
