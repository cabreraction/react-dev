import React from "react";

import './ControlledSignUpSheet.css'

export default class ControlledSignUpSheet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            fields: {
                name: "",
                email: ""
            }
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(evt) {
        this.setState({
            people: [ ...this.state.people, this.state.fields ],
            fields: {
                name: '',
                email: ''
            }
        })
        evt.preventDefault();
    }

    onInputChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;

        const fields = { ...this.state.fields }
        fields[name] = value;
        this.setState({ fields });
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
                        name="name"
                        placeholder="Name"
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                    <input type="submit"/>
                </form>
                <div>
                    <h2>Names</h2>
                    <ul>
                        {
                            this.state.people.map(({name, email}, i) => (
                                <li key={i + '_' + name}>{name} - {email}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}