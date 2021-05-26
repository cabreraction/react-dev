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

    render() {
        if (this.props.editFormOpen) {
            return(
                <TimerForm
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        } else {
            return(
                <Timer
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            );
        }
    }
}

export default EditableTimer;