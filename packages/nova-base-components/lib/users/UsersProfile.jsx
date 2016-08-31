import Telescope from 'meteor/nova:lib';
import React, {PropTypes, Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {ListContainer} from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";
import Users from 'meteor/nova:users';
import {Link} from 'react-router';

const UsersProfile = ({user}, {currentUser}) => {

    const twitterName = Users.getTwitterName(user);

    const terms = {view: "userPosts", userId: user._id};
    const {selector, options} = Posts.parameters.get(terms);

    return (
      <div>
          <Telescope.components.Header {...this.props} />
          <div class="constraintWidth_ZyYbM body_1RqUJ">

          </div>
      </div>
    )
};

UsersProfile.propTypes = {
    user: React.PropTypes.object.isRequired,
};

UsersProfile.contextTypes = {
    currentUser: React.PropTypes.object
};

UsersProfile.displayName = "UsersProfile";

module.exports = UsersProfile;