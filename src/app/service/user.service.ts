import {Injectable} from "@angular/core";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../model/User";
import {PerfumeService} from "./perfume.service";
import {Perfume} from "../model/Perfume";
import {Review} from "../model/Review";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  baseUrl = 'http://localhost:8083/users';
  baseUrl2 = 'http://localhost:8083/admin';

  userLoggedInfo: any;
  userLoggedId: number | undefined;
  mapList: Map<number, number> = new Map<number, number>();

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers() {
    return this.httpClient.get<User[]>(this.baseUrl+"/all");
  }

  loginUser(user: User):Observable<object> {
    console.log(user);
    return this.httpClient.post(this.baseUrl + '/login', user);
  }
  loginAdmin(user: User):Observable<object> {
    console.log(user);
    return this.httpClient.post(this.baseUrl2 + '/login', user);
  }

  addPerfume(perfume: Perfume): Observable<Perfume> {
    return this.httpClient.put<Perfume>(`${this.baseUrl2}/addPerfume`, perfume);
  }

  deletePerfume(id: number | undefined): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseUrl2}/deletePerfume/${id}`);
  }

  updatePerfume(id: number | undefined,perfume: Perfume): Observable<Perfume> {
    return this.httpClient.put<Perfume>(`${this.baseUrl2}/updatePerfume/${id}`, perfume);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/create`, user);
  }

  createAdmin(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl2}/create`, user);
  }

  deleteUser(id: number | undefined): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseUrl2}/delete/${id}`);
  }

  createReview(idPerfume: number | undefined, review: Review | undefined) {
    const url = `${this.baseUrl}/review/${idPerfume}`;
    return this.httpClient.post(url, review);
  }

  getAllFavorites(userId: number | undefined) {
    return this.httpClient.get<Perfume[]>(`${this.baseUrl}/allFavorite/${userId}`);
  }

  addFavorite(userId: number | undefined, idPerfume: number | undefined) {
    return this.httpClient.post(`${this.baseUrl}/favorite/${userId}/${idPerfume}`, null);
  }

  deleteFavorite(userId: number | undefined, idPerfume: number | undefined) {
    return this.httpClient.delete(`${this.baseUrl}/removeFavorite/${userId}/${idPerfume}`);
  }

  updatePrice(id: number | undefined,price: number | undefined): Observable<Perfume> {
    return this.httpClient.post<Perfume>(`${this.baseUrl2}/updatePrice/${id}/${price}`, null);
  }

  getMap(userId: number | undefined) {
    return this.httpClient.get<Map<number,number>>(`${this.baseUrl}/getMap/${userId}`);
  }

  createMap(idPerfume: number | undefined, quantity: number | undefined,userId: number | undefined) {
    return this.httpClient.post<Map<number,number>>(`${this.baseUrl}/map/${idPerfume}/${quantity}/${userId}`, null);
  }

  removeMap(userId: number | undefined) {
    return this.httpClient.post<Map<number,number>>(`${this.baseUrl}/removeMap/${userId}`, null);
  }














}
