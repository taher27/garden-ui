import React, { Component } from "react";
import cx from "classnames";
import s from "./Button.module.scss";

class Button extends Component {
  render() {
    const {
      children,
      clickHandler,
      width,
      height,
      color = "#fff",
      baseColor = "#008cba",
      fontSize,
      isDisable = false,
      isFill = false,
      styles,
    } = this.props;
    return (
      <div
        className={cx(s.buttonContainer, {
          [s.disable]: isDisable,
          [s.isFill]: isFill,
        })}
        data-testid="button-container"
        onClick={!isDisable && clickHandler}
        style={{
          width: width,
          height: height,
          color: color,
          backgroundColor: baseColor,
          fontSize: fontSize,
          // border: `1px solid ${baseColor}`,
          ...styles,
        }}
      >
        {children}
      </div>
    );
  }
}

export default Button;
