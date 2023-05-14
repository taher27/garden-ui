import React, { Component } from "react";
import cx from "classnames";
import s from "./iconList.module.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class IconList extends Component {
  render() {
    const { iconList, data, multi } = this.props;

    const IconStyles = cx(s.container, {
      [s.containermulti]: multi,
    });

    const iconsListRendering = (iconList) => {
      if (iconList.length === 0) {
        return <div className={s.none}>-</div>;
      }

      return iconList.map((icon, i) => {
        console.log("## icon: ", icon);
        if (icon.handler) {
          return (
            <div className={s.icons} key={i}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip">{icon.message}</Tooltip>}
              >
                <img
                  src={icon.src}
                  alt=""
                  onClick={() => icon.handler(data)}
                  key={i}
                />
              </OverlayTrigger>
            </div>
          );
        } else if (icon.disabled) {
          return (
            <img style={{ opacity: "0.2" }} src={icon.src} alt="" key={i} />
          );
        }
        return <img src={icon.src} alt="" key={i} />;
      });
    };
    return <div className={IconStyles}>{iconsListRendering(iconList)}</div>;
  }
}

export default IconList;
