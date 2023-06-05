import React, { Component } from 'react';
import { DayPilotScheduler } from 'daypilot-pro-react';

class Calender1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvents: [],
    };
  }
  
  handleCheckboxChange = (event) => {
    const eventId = event.data.id;
    const isSelected = event.args.checked;
    
    if (isSelected) {
      this.setState((prevState) => ({
        selectedEvents: [...prevState.selectedEvents, eventId],
      }));
    } else {
      this.setState((prevState) => ({
        selectedEvents: prevState.selectedEvents.filter((id) => id !== eventId),
      }));
    }
  };
  
  eventTemplate = (props) => {
    return (
      <div>
      <input
      type="checkbox"
      checked={this.state.selectedEvents.includes(props.data.id)}
      onChange={(e) => this.handleCheckboxChange(props)}
      />
      {props.data.text}
      </div>
      );
    };
    
    render() {
      return (
        <DayPilotScheduler
        eventTemplate={this.eventTemplate}
        events={[
          { id: 1, text: 'Event 1', start: new Date(), end: new Date() },
          { id: 2, text: 'Event 2', start: new Date(), end: new Date() },
          // Add more events as needed
        ]}
        />
        );
      }
    }
    
    export default Calender1;
    