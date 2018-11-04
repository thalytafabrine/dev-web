import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const subjects = [
    {
        value: 'None',
        label: 'None',
    },
    {
        value: 'Subj1',
        label: 'Subj1',
    },
    {
        value: 'Subj2',
        label: 'Subj2',
    },
    {
        value: 'Subj3',
        label: 'Subj3',
    },
    {
        value: 'Subj4',
        label: 'Subj4',
    },
    {
        value: 'Subj5',
        label: 'Subj5',
    },
    {
        value: 'Subj6',
        label: 'Subj6',
    }
];

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    currency: 'None',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {

    return (
      <FormControl className="container" noValidate autoComplete="off" fullWidth>
        <TextField
          required
          id="standard-name"
          label="Study List Name"
          className="textField"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Subject"
          className="textField"
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: "menu",
            },
          }}
          margin="normal"
        >
          {subjects.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    );
  }
}

export default TextFields;