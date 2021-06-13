import React from "react";
import PropTypes from 'prop-types';

export default class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            error: false
        }
    }

    // eslint-disable-next-line react/no-typos
    getDerivedStateFromProps(nextProps) {
        return { value: nextProps.value };
    }

    onChange = (evt) => {
        const name = this.props.name;
        const value = evt.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;

        this.setState({value, error});
        this.props.onChange({name, value, error});
    }

    render() {
        return (
            <div>
                <input
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <span style={{color: 'red'}}>{this.state.error}</span>
            </div>
        );
    }
}

Field.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
}