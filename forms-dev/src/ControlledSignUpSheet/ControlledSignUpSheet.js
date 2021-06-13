import React from "react";
import './ControlledSignUpSheet.css'
import isEmail from 'validator/lib/isEmail';
import Field from "../Field/Field";
export default class ControlledSignUpSheet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            fields: {
                name: "",
                email: ""
            },
            fieldErrors: {}
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(evt) {
        const people = this.state.people;
        const person = this.state.fields;

        evt.preventDefault();

        if (this.validate()) return;

        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: ''
            }
        });
    }

    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

        if (!person.name)
            return true;
        if (!person.email)
            return true;
        if(errMessages.length)
            return true;

        return false;
    }

    onInputChange({name, value, error}) {
        const fields = Object.assign({}, this.state.fields);
        const fieldErrors = Object.assign({}, this.state.fieldErrors);

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({fields, fieldErrors});
    }

    render() {
        return (
            <div className="signupSheetFrame">
                <h1>
                    Sign Up Sheet
                </h1>
                <form onSubmit={this.onFormSubmit}>
                    <Field
                        name="name"
                        placeholder="Name"
                        value={this.state.fields.name}
                        validate={val => (val ? false : 'Name Required')}
                        onChange={this.onInputChange} />
                    <Field
                        placeholder="Email"
                        name="email"
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={val => (isEmail(val) ? false : 'Invalid Email')}
                    />
                    <input type="submit" disabled={this.validate()}/>
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