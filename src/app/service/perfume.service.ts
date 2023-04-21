import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Perfume} from "../model/Perfume";

@Injectable({
  providedIn: 'root'
})
export class PerfumeService{
  baseUrl = 'http://localhost:8083/perfumes';

  constructor(private httpClient: HttpClient) {
  }

  getAllPerfumes() {
    return this.httpClient.get<Perfume[]>(`${this.baseUrl + '/findAll'}`);
  }

  getPerfumeById(id: number) {
    return this.httpClient.get<Perfume>(`${this.baseUrl + '/id'}/${id}`);
  }

  getPerfumeByBrand(brand: string) {
    return this.httpClient.get<Perfume[]>(`${this.baseUrl + '/brand'}/${brand}`);
  }

  getPerfumeByGender(gender: string) {
    return this.httpClient.get<Perfume[]>(`${this.baseUrl + '/gender'}/${gender}`);
  }

  getPerfumeByTitle(title: string) {
    return this.httpClient.get<Perfume[]>(`${this.baseUrl + '/title'}/${title}`);
  }

  addPerfume(perfume: Perfume) {
    return this.httpClient.post(`${this.baseUrl + '/add'}`, perfume);
  }


  getAllBrands() {
    return this.httpClient.get<String[]>(`${this.baseUrl + '/brands'}`);
  }

  findPerfumesByPriceRange(minPrice: number, maxPrice: number) {
    return this.httpClient.get<Perfume[]>(`${this.baseUrl + '/priceBetween'}/${minPrice}/${maxPrice}`);
  }
}
