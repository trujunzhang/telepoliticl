import React, {PropTypes, Component} from 'react';
import {FlashContainer} from "meteor/nova:core";

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

    renderSinglePost() {
        if (this.state.cachePost != null) {
            return (
              <Telescope.components.PostsPopup document={this.state.cachePost}/>
            )
        }
        return null;
    }

    render() {
        let classValue = "wrapper";
        if (this.state.isSearching) {
            classValue = classValue + " " + "search-mode";
        }
        if (this.state.cachePost) {
            classValue = classValue + " " + "no-scroll";
        }

        return (
          <div className={classValue} id="wrapper">

              <Telescope.components.HeadTags />

              <Telescope.components.UsersProfileCheck {...this.props} />

              <div>
                  <Telescope.components.Header {...this.props} />
              </div>

              <div className={this.state.isSearching ? 'overlayActive_oQWJ3' : 'overlayInactive_1UI7W'}></div>
              {this.renderSinglePost()}
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
