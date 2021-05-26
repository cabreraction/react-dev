import React from 'react';
import EditableTimerList from "../EditableTimersList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";

class TimersDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timers: []
        }
    }

    render() {
        return(
            <div className="ui three column centered grid" style={{marginBottom: "2em", marginTop: "2em"}} >
                <div className="column">
                    <h1 style={{textAlign: "center"}}>Timers</h1>
                    <EditableTimerList />
                    <ToggleableTimerForm
                        isOpen={false}
                    />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;