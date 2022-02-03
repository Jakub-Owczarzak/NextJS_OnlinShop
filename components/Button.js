import React from 'react';
import buttonStyles from '../styles/Button.module.css';
import cx from 'classnames'
const Button = ({ title, action, type }) => {
    return <div className={cx(buttonStyles.button, buttonStyles.fromCenter, {
        [buttonStyles.action]: type === "action",
        [buttonStyles.add]: type === "add",
        [buttonStyles.subtract]: type === "subtract",

    })} onClick={action}>{title}</div>;
};

Button.propTypes = {};

export default Button;
