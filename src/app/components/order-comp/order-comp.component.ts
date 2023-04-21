import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../service/review.service";
import {ComandaService} from "../../service/comanda.service";
import {Comanda} from "../../model/Comanda";

@Component({
  selector: 'app-order-comp',
  templateUrl: './order-comp.component.html',
  styleUrls: ['./order-comp.component.css']
})
export class OrderCompComponent implements OnInit {

  orders: Comanda[]= [];

  constructor(private route: ActivatedRoute, private orderService: ComandaService) { }

  ngOnInit(): void {
    this.getAllOrders();

  }
  getAllOrders() {
    this.orderService.getAllOrders().subscribe(
      data => this.orders = data,
      error => console.log(error)
    );
  }

  deleteOrder(id: number | undefined ) {
    this.orderService.deleteOrder(id).subscribe(
      data => {
        console.log(data);
        this.getAllOrders();
      },
      error => console.log(error)
    );
  }


}
