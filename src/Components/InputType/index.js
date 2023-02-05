import React, { Component } from "react";
import s from "./inputType.module.scss";
import cx from "classnames";
// import _ from 'lodash';

class InputType extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {
      onChangeHandler = () => {},
      placeholder = "",
      value = "",
      type = "text",
      readOnly = false,
      styles = {},
      width,
      id,
      dataName,
      label,
      labelStyles = {},
    } = this.props;

    return (
      <div
        className={cx(s.container)}
        style={{
          width: width,
        }}
      >
        <div className={s.heading}>
          <label style={{ ...labelStyles }}>{label}</label>
        </div>
        <div className={s.inputContent}>
          {type === "text" && (
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                onChangeHandler(e.target.value);
              }}
              readOnly={readOnly}
              style={{ ...styles }}
            />
          )}
          {type === "date" && (
            <input
              type={"date"}
              id={id}
              name={dataName}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                onChangeHandler(e.target.value);
              }}
              readOnly={readOnly}
              style={{ ...styles }}
            />
          )}
        </div>
      </div>
    );
  }
}
export default InputType;
