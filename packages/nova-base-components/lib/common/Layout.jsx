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
            currentPost: 123,
            index: 0,
            ids: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        };
    }

    dismissCurrentPostPanel() {
        this.context.messages.dismissPostPanel();
    }

    showCurrentPostPanel() {
        let id = this.state.ids[(this.state.index )];
        this.setState({index: this.state.index + 1});

        this.context.messages.pushAndPostShow(id);
    }

    //renderSinglePost() { // For test
    //    console.log("current post: " + this.state.currentPost);
    //    if (this.state.currentPost != null) {
    //        return (
    //          <div>
    //              <div>{this.state.currentPost}</div>
    //              <button onClick={this.showCurrentPostPanel.bind(this)}>show current post panel</button>
    //              <button onClick={this.dismissCurrentPostPanel.bind(this)}>dismiss current post panel</button>
    //          </div>
    //        )
    //    }
    //    return null;
    //}

    renderSinglePost() {
        if (this.state.currentPost != null) {
            return (
              <Telescope.components.PostsPopup />
            )
        }
        return null;
    }

    render() {
        return (
          <div className={this.state.isSearching ? 'wrapper search-mode' : 'wrapper'} id="wrapper">

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
