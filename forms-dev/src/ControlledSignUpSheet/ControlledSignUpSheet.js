import React from "react";

import './SignUpSheet.css'

export default class SignUpSheet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            attendants: [],
            name: ""
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    onFormSubmit(evt) {
        const names = [ ...this.state.attendants, this.state.name ];
        this.setState({ attendants: names });
        this.setState({ name: ''});
        evt.preventDefault();
    }

    onNameChange(evt) {
        const value = evt.target.value;
        this.setState({ name: value });
    }

    render() {
        return (
            <div className="signupSheetFrame">
                <h1>
                    Sign Up Sheet
                </h1>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input type="submit"/>
                </form>
                <div>
                    <h2>Names</h2>
                    <ul>
                        {
                            this.state.attendants.map((att, i) => (
                                <li key={i + '_' + att}>{att}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}