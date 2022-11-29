import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = 'http://localhost:8080/api/person';

  public save(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.url}/save`, person, this.httpOptions);
  }

  public findByid(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.url}/${id}`, this.httpOptions);
  }

  /**
   * findByName
   */
  public findByName(term: string): Observable<Person[]> {
    return this.http.get<Person[]>(
      `${this.url}/findByName/${term}`,
      this.httpOptions
    );
  }

  /**
   * findAll
   */
  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/findAll`, this.httpOptions);
  }
  /**
   * deleteByid
   */
  public deleteByid(id: number): Observable<Person> {
    return this.http.delete<Person>(
      `${this.url}/deleteById/${id}`,
      this.httpOptions
    );
  }
}
