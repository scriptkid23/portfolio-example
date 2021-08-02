import React, { Component } from "react";
// import Cabin from "../assets/img/portfolio/cabin.png";
import PortfolioChild from "./PortfolioChild";
import {Cabin,Game,Cake,Circus,Safe,Submarine} from '../assets/image'
// map

export default class Portfolio extends Component {
  constructor(){
      super();
      this.state = {
          picture : [Cabin, Cake, Circus, Game, Safe, Submarine]
      }
  }
  render() {
    return (
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row justify-content-center">
             {this.state.picture.map((value, index) => {
                 return(
                    <PortfolioChild key={index} picture={value}/>
                 )
             })}
          </div>
        </div>
      </section>
    );
  }
}
