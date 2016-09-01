import React, {PropTypes, Component} from 'react';
import {FlashContainer} from "meteor/nova:core";
import {DocumentContainer} from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

class Week extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var days = [],
          date = this.props.date,
          month = this.props.month;

        for (var i = 0; i < 7; i++) {
            var day = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };
            const _className = "day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : "");
            days.push(
              <td role="gridcell" title="2016-5-29" className="rc-calendar-cell rc-calendar-last-month-cell"
                  key={day.date.toString()}>
                  <div className="rc-calendar-date" aria-selected="false" aria-disabled="false"> {day.number}</div>
              </td>

              //<span key={day.date.toString()}
              //              className={_className}
              //              onClick={this.props.select.bind(null, day)}>
              //              {day.number}
              //              </span>
            );
            date = date.clone();
            date.add(1, "d");
        }

        return (
          <tr role="row" key={days[0].toString()}>
              {days}
          </tr>
        )
    }
}

Week.contextTypes = {
    messages: React.PropTypes.object
};

Week.displayName = "Week";

module.exports = Week;
    