import React, {PropTypes, Component} from 'react';
import {FlashContainer} from "meteor/nova:core";
import {DocumentContainer} from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

class WidgetTopics extends Component {

    constructor(props) {
        super(props);

        this.state = this.initialState = {};
    }

    render() {
        return (
          <div className="paddedBox_2UY-S box_c4OJj sidebarBox_1-7Yk sidebarBoxPadding_y0KxM">
              <div className="content_DcBqe">
                  <div className="rc-calendar">
                      <div className="rc-calendar-date-panel">
                          <div className="rc-calendar-header">
                              {this.renderHeader()}
                          </div>
                          <div className="rc-calendar-calendar-body">
                              <table className="rc-calendar-table" cellspacing="0" role="grid">
                                  <thead >
                                  {this.renderDayNames()}
                                  </thead>
                                  <tbody className="rc-calendartbody">
                                  {this.renderWeeks()}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }

    renderWeeks() {
        var weeks = [],
          done = false,
          date = this.state.month.clone().startOf("month").add("w" - 1).day("Sunday"),
          monthIndex = date.month(),
          count = 0;

        while (!done) {
            weeks.push(<Telescope.components.Week key={date.toString()} date={date.clone()} month={this.state.month}
                                                  select={this.select.bind(this)} selected={this.state.month}/>);
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }

        return weeks;
    }

    renderMonthLabel() {
        return (
          <span>{this.state.month.format("MMMM, YYYY")}</span>
        )
    }

}

WidgetTopics.contextTypes = {
    messages: React.PropTypes.object
};

WidgetTopics.displayName = "WidgetTopics";

module.exports = WidgetTopics;
