import React from "react";
import "./StickyBar.css"; // Import CSS for styling

class StickyBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;

    return (
      <div
        className={`sticky-bar ${isHovered ? "shake" : ""}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        Admission Enquiry
      </div>
    );
  }
}

export default StickyBar;
