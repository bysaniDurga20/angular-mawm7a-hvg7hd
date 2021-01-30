import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-product-alertscomponent",
  templateUrl: "./product-alertscomponent.component.html",
  styleUrls: ["./product-alertscomponent.component.css"]
})
export class ProductAlertscomponentComponent implements OnInit {
  @Input() product;
  constructor() {}

  ngOnInit() {}
}
