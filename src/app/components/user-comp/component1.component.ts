import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Perfume} from "../../model/Perfume";
import {PerfumeService} from "../../service/perfume.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {ReviewService} from "../../service/review.service";
import {Review} from "../../model/Review";
import {UserService} from "../../service/user.service";
import {ComandaService} from "../../service/comanda.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit{
  perfumes: Perfume[]= [];
  selectedGender: any;
  selectedBrand: any;
  brands: any;
  brandsList: String[]= [];
  searchTerm: any;
  selectedPrice: number | undefined;
  reviews: Review[] = [];
  review: Review = new Review();
  isAddReview = false;
  selectedPerfumeId: number | undefined;
  isRed = false;
  selectedQuantity: number | undefined;
  quantityList: number[] = [1,2,3,4,5];
  idUser: number | undefined;
  showFavorites = false;
  mapList: Map<number, number> = new Map<number, number>();

  constructor(private perfumeService: PerfumeService, private router: Router,
              private reviewService: ReviewService, private userService:UserService) {
  }


  ngOnInit() {
    this.getAllPerfumes();
    this.getAllBrands();
    this.idUser = this.userService.userLoggedId;
    this.getMap(this.idUser);
   // this.removeMap(this.idUser);
  }


  public getAllPerfumes(): void {
    this.perfumeService.getAllPerfumes().subscribe(
      (response: Perfume[]) => {
        this.perfumes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllBrands(): void {
    this.perfumeService.getAllBrands().subscribe(
      (response: String[]) => {
        this.brandsList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getPerfumeById(id: number): void {
    this.perfumeService.getPerfumeById(id).subscribe(
      (response: Perfume) => {
        this.perfumes = [response];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getPerfumeByBrand(brand: string): void {
    this.perfumeService.getPerfumeByBrand(brand).subscribe(
      (response: Perfume[]) => {
        this.perfumes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getPerfumeByGender(gendre: string): void {
    this.perfumeService.getPerfumeByGender(gendre).subscribe(
      (response: Perfume[]) => {
        this.perfumes = response;
        console.log(this.perfumes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getPerfumeByTitle(title: string) {
    this.perfumeService.getPerfumeByTitle(title).subscribe(
      (response: Perfume[]) => {
        this.perfumes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public findPerfumesByPriceRange(min: number, max: number): void {
    this.perfumeService.findPerfumesByPriceRange(min, max).subscribe(
      (response: Perfume[]) => {
        this.perfumes = response;
        console.log(this.perfumes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onApplyFilterClick(): void {

    if (this.selectedGender != null) {
     this.getPerfumeByGender(this.selectedGender);
    }
    if (this.searchTerm != null) {
      this.getPerfumeByTitle(this.searchTerm);
    }
    if (this.selectedBrand != null) {
      this.getPerfumeByBrand(this.selectedBrand);
    }
    let maxim: number;
    let min: number;
    if (this.selectedPrice != null) {
      min = this.selectedPrice;
      maxim = this.selectedPrice +++ 100;
      this.findPerfumesByPriceRange(min, maxim);
    }
  }

  getReviewsByPerfumeId(id: number | undefined): void {
    this.reviewService.getReviewsByPerfumeId(id).subscribe(
      (response: Review[]) => {
        this.reviews = response;
        this.router.navigate(['/reviews'],{ queryParams: { perfumeId: id } });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  createReview(id: number | undefined): void {
    this.userService.createReview(id,this.review).subscribe(
      data => {
        console.log(data);
        this.review = new Review();
        this.isAddReview = false;
        this.getReviewsByPerfumeId(id);
      },
      error => console.log(error)
    );
  }

  getAllFavorites(userId:number|undefined): void {
    this.userService.getAllFavorites(userId).subscribe(
      (response: Perfume[]) => {
        console.log(response);
        this.perfumes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  modifyFavorites(idUser: number | undefined, idPerfume: number | undefined,button: any): void {
    if (this.isRed) {
      this.userService.deleteFavorite(idUser,idPerfume).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
      button.style.color = "";
    }
    else {
      this.userService.addFavorite(idUser,idPerfume).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
      button.style.color = "red";
    }
    this.isRed = !this.isRed;
  }

  getMap(userId:number|undefined): void {
    this.userService.getMap(userId).subscribe(
      (response: Map<number,number>) => {
        this.mapList = response;
        this.userService.mapList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  createMap(idUser: number | undefined, idPerfume: number | undefined,quantity: number | undefined): void {
    this.userService.createMap(idPerfume,quantity,idUser).subscribe(
      data => {
      },
      error => console.log(error)
    );
  }

  removeMap(idUser: number | undefined): void {
    this.userService.removeMap(idUser).subscribe(
      data => {
      },
      error => console.log(error)
    );
  }

  navigateToCart()
  {
    this.router.navigate(['/cart']);
  }



}
