import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface Slider {
  people: number;
  value: number;
}

@Injectable()
export class SliderService {
  constructor(private http: HttpClient) {}

  getAllSliders(): Observable<Slider[]> {
    return this.http.get<Slider[]>('http://142.93.17.255:8000/api/slider');
  }

  getSlider(people: number): Observable<Slider> {
    return this.http.get<Slider>('http://142.93.17.255:8000/api/slider/' + people);
  }

  insertSlider(slider: Slider): Observable<Slider> {
    return this.http.post<Slider>('http://142.93.17.255:8000/api/slider/', slider);
  }

  updateSlider(slider: Slider): Observable<void> {
    return this.http.put<void>(
      'http://142.93.17.255:8000/api/slider/' + slider.people, slider
    );
  }

  deleteSlider(slider: Slider) {
    return this.http.delete('http://142.93.17.255:8000/api/slider/' + slider);
  }
}
