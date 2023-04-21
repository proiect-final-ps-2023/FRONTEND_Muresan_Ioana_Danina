import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Perfume} from "../model/Perfume";
import {Review} from "../model/Review";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewService{
  baseUrl = 'http://localhost:8083/users';
  baseUrl2 = 'http://localhost:8083/admin';

  constructor(private httpClient: HttpClient) {
  }

  createReview(idPerfume: number | undefined, review: Review) {
    const url = `${this.baseUrl}/review/${idPerfume}`;
    return this.httpClient.post(url, review);
  }

  getReviewsByPerfumeId(idPerfume: number | undefined): Observable<Review[]> {
    const url = `${this.baseUrl2}/reviews/${idPerfume}`;
    return this.httpClient.get<Review[]>(url);
  }



}
