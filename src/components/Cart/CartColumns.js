import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">produits</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">nom du produit</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">prix</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">quantité</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">retirer</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">total</p>
          </div>
        </div>
      </div>
    );
  }
}
