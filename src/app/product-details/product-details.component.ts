import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private CartService: CartService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const productid = Number(params.get("ProductId"));
    console.log(productid);
    this.product = products.find(product => product.id == productid);

  
  }
}
