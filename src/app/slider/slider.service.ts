import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface Slider {
  id: number;
  value: number;
}
const url = 'http://142.93.17.255:3000/slider/';

@Injectable()
export class SliderService {
  constructor(private http: HttpClient) {}

  getAllSliders(): Observable<Slider[]> {
    return this.http.get<Slider[]>(url);
  }

  getSlider(id: number): Observable<Slider> {
    return this.http.get<Slider>(url + id);
  }

  insertSlider(slider: Slider): Observable<Slider> {
    return this.http.post<Slider>(url, slider);
  }

  updateSlider(slider: Slider, index): Observable<void> {
    console.log(slider);
    return this.http.put<void>(
      url + slider[index].id, slider[index]
    );
  }

  deleteSlider(slider: Slider) {
    return this.http.delete(url + slider);
  }
}
