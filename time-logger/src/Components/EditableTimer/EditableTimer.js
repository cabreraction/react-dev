import React from "react";
import TimerForm from "../TimerForm/TimerForm";
import Timer from "../Timer/Timer";

class EditableTimer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editFormOpen: false
        }
    }

    handleFormClose = () => {
        this.closeForm();
    }

    handleEditClick = () => {
        this.openForm();
    }

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    }

    openForm = () => {
        this.setState(
            {
                editFormOpen: true
            }
        );
    }

    closeForm = () => {
        this.setState(
            {
                editFormOpen: false
            }
        );
    }

    render() {
        if (this.state.editFormOpen) {
            return(
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return(
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditClick={this.handleEditClick}
                    onTimerDelete={this.props.onTimerDelete}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                />
            );
        }
    }
}

export default EditableTimer;