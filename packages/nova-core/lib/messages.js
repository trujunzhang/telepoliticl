import React, {PropTypes, Component} from 'react';
import PostDetailSet from "./postdetailset.js";

const Messages = {
  // Local (client-only) collection
  collection: new Meteor.Collection(null),

  flash(content, type) {
    type = (typeof type === 'undefined') ? 'error' : type;
    // Store errors in the local collection
    this.collection.insert({content: content, type: type, seen: false, show: true});
  },

  layout: Component,

  isSearching(search){
    this.layout.setState({isSearching: search})
  },

  postDetailSet: new PostDetailSet(),

  pushAndPostShow(postId){
    var currentPost = this.postDetailSet.push(postId);
    this.layout.setState({currentPost: currentPost});
  },

  dismissPostPanel(){
    var currentPost = this.postDetailSet.lastPage();
    this.layout.setState({currentPost: currentPost});
  },

  markAsSeen(messageId) {
    this.collection.update(messageId, {$set: {seen: true}});
  },

  clear(messageId) {
    this.collection.update(messageId, {$set: {show: false}});
  },

  clearSeen() {
    this.collection.update({seen: true}, {$set: {show: false}}, {multi: true});
  }
};

export default Messages;
