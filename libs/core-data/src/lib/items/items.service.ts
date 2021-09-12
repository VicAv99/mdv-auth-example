import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Item } from '@cs/api-interfaces';
import { CS_ENVIRONMENT, CsEnvironment } from '@cs/environment';
import { Observable } from 'rxjs';

const MODEL = 'items';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(
    @Inject(CS_ENVIRONMENT) private config: CsEnvironment,
    private http: HttpClient
  ) {}

  all(): Observable<Item[]> {
    return this.http.get<Item[]>(this.getUrl());
  }

  findOne(id: string | number): Observable<Item> {
    return this.http.get<Item>(this.getUrlWithId(id));
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.getUrl(), item);
  }

  update(item: Item): Observable<Item> {
    return this.http.patch<Item>(this.getUrlWithId(item.id), item);
  }

  delete({ id }: Item): Observable<Item> {
    return this.http.delete<Item>(this.getUrlWithId(id));
  }

  private getUrl(): string {
    return `${this.config.baseUrl}/${MODEL}`;
  }

  private getUrlWithId(id: string | number): string {
    return `${this.getUrl()}/${id}`;
  }
}
