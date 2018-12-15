import React, { Component } from "react";
import { Menubar } from "primereact/menubar";
import { withRouter } from "react-router";

class Navbar extends Component {
  handleClick = (event, url) => {
    event.preventDefault();
    this.props.history.push(url);
  };

  render() {
    const items = [
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        url: "/",
        command: ({ originalEvent }) => {
          this.handleClick(originalEvent, "/");
        }
      },
      {
        label: "Resume",
        icon: "pi pi-fw pi-file",
        url: "/references",
        command: ({ originalEvent }) => {
          this.handleClick(originalEvent, "/references");
        }
      }
    ];

    return <Menubar model={items} />;
  }
}

export default withRouter(Navbar);
