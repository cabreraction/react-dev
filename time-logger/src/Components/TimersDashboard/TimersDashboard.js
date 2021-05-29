import React from 'react';
import EditableTimerList from "../EditableTimersList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";
import {helpers} from "../../Helpers/helpers";

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

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    }

    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t)
        })
    }

    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    }

    updateTimer = (attrs) => {
        let modifiedTimers = this.state.timers.map(timer => {
           if (timer.id === attrs.id) {
               let newTimer = { ...timer }
               newTimer.title = attrs.title;
               newTimer.project = attrs.project;
               return newTimer;
           } else {
               return timer;
           }
        });

        this.setState({ timers: modifiedTimers });
    }

    handleDeleteTimer = (id) => {
        this.deleteTimer(id);
    }

    deleteTimer = (id) => {
        let modifiedTimers = this.state.timers.filter(timer => timer.id != id);
        this.setState({ timers: modifiedTimers });
    }

    render() {
        return(
            <div className="ui three column centered grid" style={{marginBottom: "2em", marginTop: "2em"}} >
                <div className="column">
                    <h1 style={{textAlign: "center"}}>Timers</h1>
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTimerDelete={this.handleDeleteTimer}
                    />
                    <ToggleableTimerForm
                        isOpen={false}
                        onFormSubmit={this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;