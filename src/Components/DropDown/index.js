import React, { Component, createRef, Fragment } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import _ from "lodash";

import s from "./DropDown.module.scss";
import ArrowUpDownBlackIcon from "../../assets/svgs/arrowUpDownBlack.svg";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelector: false,
      searchValue: "",
      dropDownData: [],
    };
    this.dropDownRef = createRef();
    this.buttonRef = createRef();
    this.optionBoxRef = createRef();
    this.handleDropdownPositioning = this.handleDropdownPositioning.bind(this);
  }

  componentDidMount() {
    this.setState({ dropDownData: this.props.data });
    window.addEventListener("click", this.handleClickOutside);
    window.addEventListener("scroll", this.handleDropdownPositioning);
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleDropdownPositioning();
    const { searchFunction } = this.props;
    const { searchValue } = this.state;
    if (!_.isEqual(prevProps.data, this.props.data)) {
      this.setState({ dropDownData: this.props.data });
    }
    if (this.state.searchValue !== prevState.searchValue) {
      if (searchFunction) {
        searchFunction(searchValue);
      } else {
        const dataClone = _.cloneDeep(this.props.data);
        const filteredData = dataClone.filter((item) =>
          item.title
            .toLowerCase()
            .includes(this.state.searchValue.toLowerCase())
        );
        this.setState({ dropDownData: filteredData });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickOutside);
    window.removeEventListener("scroll", this.handleDropdownPositioning);
  }

  handleClickOutside = (event) => {
    if (
      this.dropDownRef &&
      this.dropDownRef.current &&
      !this.dropDownRef.current.contains(event.target)
    ) {
      if (
        this.optionBoxRef &&
        this.optionBoxRef.current &&
        this.optionBoxRef.current.contains(event.target)
      ) {
        return;
      }
      this.setState({ showSelector: false });
    }
  };

  handleDropdownPositioning() {
    if (
      this.buttonRef &&
      this.buttonRef.current &&
      this.optionBoxRef &&
      this.optionBoxRef.current
    ) {
      let buttonElem = this.buttonRef.current;
      let optionBoxElem = this.optionBoxRef.current;
      let buttonRect = buttonElem.getBoundingClientRect();

      let top =
        buttonRect.top + document.documentElement.scrollTop + buttonRect.height;
      let left = buttonRect.left;
      let width = buttonRect.width;

      optionBoxElem.style.left = left + "px";
      optionBoxElem.style.top = top + "px";
      optionBoxElem.style.width = width + "px";
    }
  }

  render() {
    const {
      // data = [],
      currentSet,
      setCurrentSet = () => console.log("dropdown clicked"),
      isNonSelectableLabel = false,
      dropDownTitle = "",
      showSearchOption = false,
      isLoading = false,
      isDisable = false,
      hideOnlyOptionAuto = false, // to show the first option if list length == 1;
      disableDropDown = true,
      labelStyles,
      classes,
    } = this.props;
    const { showSelector, dropDownData } = this.state;

    const dropDownOptions = () =>
      dropDownData.map((opt, i) => {
        return (
          <Fragment key={i}>
            <label
              key={i}
              className={cx(s.option, {
                [s.optionActive]: opt.title === _.get(currentSet, "title", ""),
              })}
              onClick={() => {
                setCurrentSet(opt);
                this.setState({ showSelector: false, searchValue: "" });
              }}
            >
              {opt.title}
            </label>
          </Fragment>
        );
      });

    return (
      <div
        ref={this.dropDownRef}
        className={s.container}
        style={{ ...this.props.dropDownContanierStyles }}
      >
        {!isNonSelectableLabel && (
          <label
            ref={this.buttonRef}
            className={cx(
              s.display,
              classes,
              {
                [s.displayActive]: showSelector,
              },
              {
                [s.disableDropDown]: !disableDropDown,
              }
            )}
            onClick={() => {
              disableDropDown && this.setState({ showSelector: !showSelector });
            }}
            style={labelStyles}
          >
            <span className={cx({ [s.disableText]: !disableDropDown })}>
              {_.get(this.state, "dropDownData", []).length === 1 &&
              _.isEmpty(_.get(currentSet, "title", ""))
                ? dropDownTitle || "-"
                : _.get(currentSet, "title", "")}
            </span>
            <div className={s.iconUpDown}>
              <img
                src={ArrowUpDownBlackIcon}
                alt=""
                className={s.iconDown}
                style={{ width: "75%" }}
              />
            </div>
          </label>
        )}

        {showSelector && !isDisable && (
          <>
            {(_.get(this.state, "dropDownData", []).length > 1 ||
              showSearchOption) &&
              ReactDOM.createPortal(
                <div
                  ref={this.optionBoxRef}
                  className={s.optionsBox}
                  style={{ ...this.props.styles }}
                >
                  {!isLoading ? (
                    dropDownOptions()
                  ) : (
                    <div style={{ height: "120px" }}></div>
                  )}
                </div>,
                document.getElementById("layout")
              )}
          </>
        )}
      </div>
    );
  }
}
export default DropDown;
