import React, {PropTypes, Component} from 'react';
import {FlashContainer} from "meteor/nova:core";
import {DocumentContainer} from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

class WidgetCalendar extends Component {

    constructor(props) {
        super(props);

        this.state = this.initialState = {
            month: this.props.selected.clone()
        };
    }

    previous() {
        var month = this.state.month;
        month.add(-1, "M");
        this.setState({month: month});
    }

    next() {
        var month = this.state.month;
        month.add(1, "M");
        this.setState({month: month});
    }

    select(day) {
        this.props.selected = day.date;
        this.forceUpdate();
    }

    renderHeader() {
        return (
          <div style="position:relative;" data-reactid="1273"><a class="rc-calendar-prev-year-btn" role="button"
                                                                 title="Last year (Control + left)" data-reactid="1274">«</a><a
            class="rc-calendar-prev-month-btn" role="button" title="Previous month (PageUp)"
            data-reactid="1275">‹</a><span class="rc-calendar-my-select" data-reactid="1276"><a
            class="rc-calendar-month-select" role="button" title="Choose a month" data-reactid="1277">August</a><a
            class="rc-calendar-year-select" role="button" title="Choose a month" data-reactid="1278">2016</a></span><a
            class="rc-calendar-next-month-btn" title="Next month (PageDown)" data-reactid="1279">›</a><a
            class="rc-calendar-next-year-btn" title="Next year (Control + right)" data-reactid="1280">»</a></div>
        )
    }

    render() {
        return (
          <div className="rc-calendar">
              <div className="rc-calendar-date-panel">
                  <div className="rc-calendar-header">
                      {this.renderHeader()}
                  </div>
                  <Telescope.components.DayNames/>
                  {this.renderWeeks()}
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
            weeks.push(<Telescope.components.Week key={date.toString()}
                                                  date={date.clone()}
                                                  month={this.state.month}
                                                  select={this.select}
                                                  selected={this.props.selected}/>);
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }

        return weeks;
    }

    renderMonthLabel() {
        return (<span>{this.state.month.format("MMMM, YYYY")}</span>)
    }

}

WidgetCalendar.contextTypes = {
    messages: React.PropTypes.object
};

WidgetCalendar.displayName = "WidgetCalendar";

module.exports = WidgetCalendar;
    