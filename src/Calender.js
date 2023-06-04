import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar} from "daypilot-pro-react";
import { Checkbox } from '@mui/material';

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: "2022-02-02",
      viewType: "Week",
      cellHeight: 30,
      timeRangeSelectedHandling: "Enabled",
      // onTimeRangeSelected: function (args) {
      //   DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
      //     var dp = args.control;
      //     dp.clearSelection();
      //     if (!modal.result) { return; }
      //     dp.events.add(new DayPilot.Event({
      //       start: args.start,
      //       end: args.end,
      //       id: DayPilot.guid(),
      //       text: modal.result
      //     }));
      //   });
      // },
      onBeforeEventRender: args => {
        // args.data.backColor = "#93c47d";
        // args.data.barHidden = true;
        // args.data.fontColor = "white";
        // args.data.borderColor = "darker";

        // args.data.areas = [
        //   {right: 6, top: 6, width: 17, height: 17, image: "info-17-inverted-rounded-semi.svg", onClick: args=> this.showDetails(args.source)},
        //   ];
      },
      onBeforeEventDomAdd: args => {
        args.element = <div>
          <div style={{position: "absolute", right: "25px", top: "5px", height: "17px", width: "17px", border: 'none'}}
              >
                {/* <input type='checkbox' value='Available'/> */}
                <Checkbox>Available</Checkbox>
            
          </div>
        </div>;
      }
    };
  }

  showDetails(e) {
   DayPilot.Modal.alert(e.data.text);
  }

  componentDidMount() {

    // load resource and event data
    this.setState({
      events: [
        {
          id: 1,
          text: "Event 1",
          start: "2022-02-01T09:00:00",
          end: "2022-02-01T14:00:00",
        },
        {
          id: 2,
          text: "Event 2",
          start: "2022-02-02T10:00:00",
          end: "2022-02-02T15:00:00",
        }
      ]
    });

  }

  render() {
    return (
      <div>
        <DayPilotCalendar
          {...this.state}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default Calendar;