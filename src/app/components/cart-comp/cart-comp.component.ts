import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {PerfumeService} from "../../service/perfume.service";
import {Perfume} from "../../model/Perfume";
import {HttpErrorResponse} from "@angular/common/http";
import {ComandaService} from "../../service/comanda.service";
import {Comanda} from "../../model/Comanda";
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-comp',
  templateUrl: './cart-comp.component.html',
  styleUrls: ['./cart-comp.component.css']
})
export class CartCompComponent implements OnInit{

  mapList: Map<number, number> = new Map<number, number>();
  perfume: Perfume = new Perfume();
  public perfumesById: { [key: string]: Perfume[] } = {};
  comanda: Comanda = new Comanda();
  phone: any;
  city: any;
  address: any;


  constructor(public userService:UserService,public comandaService: ComandaService,
              public perfumeService:PerfumeService,private router :Router) { }

  ngOnInit(): void {
    this.mapList = this.userService.mapList;
    console.log(this.mapList);
    for (const [id, quantity] of Object.entries(this.mapList)) {
      this.getPerfumeById(Number(id));
    }

  }

  public getPerfumeById(id: number): void {
    this.perfumeService.getPerfumeById(id).subscribe(
      (response: Perfume) => {
        if (!this.perfumesById[id]) {
          this.perfumesById[id] = [];
        }
        this.perfumesById[id].push(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addOrder(phone: string | undefined,city:string | undefined ,address:string | undefined , userId: number | undefined): void {
    this.comandaService.addOrder(phone,city,address,userId).subscribe(
      data => {
        this.comanda = data;
        console.log(data);
      },error => console.log(error) );
    this.router.navigate(['/done']);
  }

}
