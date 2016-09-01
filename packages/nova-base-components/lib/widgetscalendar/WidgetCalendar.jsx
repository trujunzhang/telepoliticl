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

    render() {
        return (
          <div>
              <div className="header">
                  <i className="fa fa-angle-left" onClick={this.previous}></i>
                  {this.renderMonthLabel()}
                  <i className="fa fa-angle-right" onClick={this.next}></i>
              </div>
              <DayNames/>
              {this.renderWeeks()}
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
            weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month} select={this.select}
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
    