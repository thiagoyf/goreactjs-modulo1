import React from 'react';
import PropTypes from 'prop-types';

// Form stateful component
// export default class Button extends Component {
//   static defaultProps = {
//     children: "Salvar"
//   };

//   static propTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.string
//   };

//   render() {
//     return <button onClick={this.props.onClick}>{this.props.children}</button>;
//   }
// }

// Equivalent to the above code
const Button = props => <button onClick={props.onClick}>{props.children}</button>;

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
