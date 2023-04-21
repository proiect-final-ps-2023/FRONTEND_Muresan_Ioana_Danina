import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Perfume} from "../model/Perfume";
import {Comanda} from "../model/Comanda";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComandaService{

  baseUrl = 'http://localhost:8083/users';
  baseUrl2 = 'http://localhost:8083/admin';

  constructor(private httpClient: HttpClient) {
  }

  getAllOrders() {
    return this.httpClient.get<Comanda[]>(`${this.baseUrl2 + '/allOrders'}`);
  }

  deleteOrder(id: number | undefined): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseUrl2}/deleteOrder/${id}`);
  }

  addOrder(phone: string | undefined, city: string | undefined, address: string | undefined, userId: number | undefined) {
    return this.httpClient.put<Comanda>(`${this.baseUrl + '/order'}/${userId}/${city}/${address}/${phone}`, null);
  }

}
