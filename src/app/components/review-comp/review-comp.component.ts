import {Component, OnInit} from '@angular/core';
import {PerfumeService} from "../../service/perfume.service";
import {Review} from "../../model/Review";
import {ReviewService} from "../../service/review.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-review-comp',
  templateUrl: './review-comp.component.html',
  styleUrls: ['./review-comp.component.css']
})
export class ReviewCompComponent implements OnInit {

  perfumeId: number | undefined;
  reviews: Review[]=[];

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.perfumeId = params['perfumeId'];
      this.getReviewsByPerfumeId(this.perfumeId);
    });
  }

  getReviewsByPerfumeId(id: number | undefined): void {
    this.reviewService.getReviewsByPerfumeId(id).subscribe(
      (response: Review[]) => {
        this.reviews = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getRatingImage(rating: number | undefined): string {
    if (rating === undefined) {
      return 'not ok';
    }
    if (rating < 3) {
      return 'assets/images/bad.jpg';
    } else if (rating == 3) {
      return 'assets/images/neutru.jpg';
    } else {
      return 'assets/images/good.jpg';
    }
  }


}
