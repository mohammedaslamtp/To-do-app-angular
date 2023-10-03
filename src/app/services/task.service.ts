import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASK } from '../TASK';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<TASK[]> {
    return this.http.get<TASK[]>(this.apiUrl);
  }

  deleteTask(task: TASK): Observable<TASK> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TASK>(url);
  }

  updateToggleReminder(task: TASK) {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TASK>(url, task, httpOptions);
  }

  addTask(task: TASK): Observable<TASK> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.post<TASK>(this.apiUrl, task, httpOptions);
  }
}
