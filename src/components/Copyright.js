import React, { Component } from "react";

export default class Copyright extends Component {
  render() {
    return (
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; {this.props.owner} Website 2021</small>
        </div>
      </div>
    );
  }
}
