import React from 'react';
import EditableTimerList from "../EditableTimersList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";

class TimersDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timers: [
                {
                    title: 'Practice squat',
                    project: 'Gym Chores',
                    id: 1,
                    elapsed: 5456099,
                    runningSince: Date.now()
                },
                {
                    title: 'Bake squash',
                    project: 'Kitchen Chores',
                    id: 2,
                    elapsed: 1273998,
                    runningSince: null,
                }
            ]
        }
    }

    render() {
        return(
            <div className="ui three column centered grid" style={{marginBottom: "2em", marginTop: "2em"}} >
                <div className="column">
                    <h1 style={{textAlign: "center"}}>Timers</h1>
                    <EditableTimerList timers={this.state.timers} />
                    <ToggleableTimerForm
                        isOpen={false}
                    />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;