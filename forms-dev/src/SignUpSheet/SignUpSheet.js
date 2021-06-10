import React from "react";

import './SignUpSheet.css'

export default class SignUpSheet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            attendants: []
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.nameInput = React.createRef();
    }

    onFormSubmit(evt) {
        const name = this.nameInput.current.value;
        const names = [ ...this.state.attendants, name ];
        this.setState({ attendants: names });
        this.nameInput.current.value = '';
        evt.preventDefault();
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
                        ref={this.nameInput}
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