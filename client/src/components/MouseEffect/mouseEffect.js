import React, { Component } from "react";

import MouseParticles from "react-mouse-particles";

class MouseEffect extends Component {
  render() {
    return (
      <>
        <MouseParticles
          g={1}
          color="random"
          cull="col,image-wrapper"
          life={3}
        />
      </>
    );
  }
}
export default MouseEffect;
