import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const Navbar = () => {
  const items = [
    {
      label: "Resume",
      icon: "pi pi-fw pi-file",
      target: "_blank",
      url: "https://drive.google.com/open?id=1dz8LRuH2kA2_waJAUBc50dE3PLjGpV3j"
    },
    {
      label: "LinkedIn",
      icon: "fab fa-linkedin",
      target: "_blank",
      url: "https://www.linkedin.com/in/justin-choi-a8413955/"
    },
    {
      label: "Github",
      icon: "fab fa-github",
      target: "_blank",
      url: "https://github.com/Makita"
    }
  ];

  return (
    <Menubar model={items}>
      <Button
        label="Contact Me"
        icon="pi pi-envelope"
        onClick={() => (window.location = "mailto:justin.choi.000@gmail.com")}
      />
    </Menubar>
  );
};

export default Navbar;
