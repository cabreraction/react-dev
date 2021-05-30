import React from 'react';
import EditableTimer from "../EditableTimer/EditableTimer";

class EditableTimerList extends React.Component {

    render() {
        const timers = this.props.timers.map(timer => (
            <EditableTimer
                key={timer.id}
                title={timer.title}
                id={timer.id}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onTimerDelete={this.props.onTimerDelete}
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick}
            />
        ));
        return(
            <div id="timers">
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;