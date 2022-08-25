import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemInterface } from '../interfaces/items';
import { map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:5000/api/items_list';

  constructor(private httpClient: HttpClient) { }

  public getAllItems():Observable<ItemInterface[]> {
    return this.httpClient.get<ItemInterface[]>(this.REST_API_SERVER)
  }

  // public getAllItems():Observable<ItemInterface[]> {
  //   return this.httpClient.get(this.REST_API_SERVER).pipe(
  //     map((response:any) => response as ItemInterface[]),
  //     tap((_: ItemInterface[]) => console.log('Details: {{Data}}')))

  // }

  public getAllItemsbyId(id: number):Observable<ItemInterface[]> {
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.get<ItemInterface[]>(url)
  }

}
