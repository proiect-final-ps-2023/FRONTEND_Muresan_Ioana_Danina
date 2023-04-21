import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {Perfume} from "../../model/Perfume";
import {UserService} from "../../service/user.service";
import {PerfumeService} from "../../service/perfume.service";
import {ReviewService} from "../../service/review.service";
import {Review} from "../../model/Review";
import {Router} from "@angular/router";
import {ComandaService} from "../../service/comanda.service";
import {Comanda} from "../../model/Comanda";

@Component({
  selector: 'app-admin-comp',
  templateUrl: './admin-comp.component.html',
  styleUrls: ['./admin-comp.component.css']
})
export class AdminCompComponent implements OnInit {

  users: User[] | undefined;
  perfumes: Perfume[] | undefined;
  perfume: Perfume = new Perfume();
  isAddPerfume = false;
  selectedPerfume: Perfume = new Perfume();
  showUpdateModal = false;
  reviews: Review[] = [];
  orders: Comanda[] = [];
  saleDiscount: number | undefined;
  newUser = new User();
  createAdminFlag: boolean = false;
  createMessage = '';


  constructor(private userService: UserService,private router: Router, private perfumeService: PerfumeService,
              private reviewService:ReviewService,private orderService: ComandaService) { }

  ngOnInit(): void {
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      data => this.users = data,
      error => console.log(error)
    );
  }

  getAllPerfumes() {
    this.perfumeService.getAllPerfumes().subscribe(
      data => this.perfumes = data,
      error => console.log(error)
    );
  }

  addPerfume() {
    this.perfumeService.addPerfume(this.perfume).subscribe(
      data => {
        console.log(data);
        this.perfume = new Perfume();
        this.isAddPerfume = false;
        this.getAllPerfumes();
      },
      error => console.log(error)
    );
  }

  deletePerfume(id: number | undefined ) {
    this.userService.deletePerfume(id).subscribe(
      data => {
        console.log(data);
        this.getAllPerfumes();
      },
      error => console.log(error)
    );
  }

  openUpdateModal(perfume: Perfume) {
    this.selectedPerfume = perfume;
    this.showUpdateModal = true;
  }

  updatePerfume() {
    this.userService.updatePerfume(this.selectedPerfume.id, this.selectedPerfume).subscribe(
      data => {
        console.log(data);
        this.getAllPerfumes();
        this.showUpdateModal = false;
      }, error => console.log(error)
    );
  }

  deleteUser( id: number | undefined) {
    this.userService.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.getAllUsers();
      },
      error => console.log(error)
    );
  }

  getReviewsByPerfumeId(id: number | undefined) {
    this.reviewService.getReviewsByPerfumeId(id).subscribe(
      data => {
        this.reviews = data;
        this.router.navigate(['/reviews'],{ queryParams: { perfumeId: id } });
        console.log(data);
      },
      error => console.log(error)
    );
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe(
      data => {
        this.orders = data;
        console.log(data);
        this.router.navigate(['/orders']);
      },
      error => console.log(error)
    );
  }

  updateSaleDiscount(id: number | undefined,price: number | undefined) {
    this.userService.updatePrice(id, price).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }

  createAdmin() {
    this.userService.createAdmin(this.newUser).subscribe(
      data => {
        console.log(data);
        this.createMessage = 'Done!';
      },
      error => console.log(error)
    );
  }


}
