import {
	Component,
	PropTypes
} from 'react';

class Input extends Component {
	constructor() {
    super();
    this.state = {
      value: ''
    };
	}
	render() {
    const {value, onChangeInput} = this.props;
		return (
			<div>
        <input type="text" onChange={onChangeInput} />
        <span>{value}</span>
      </div>
		)
	}
}
