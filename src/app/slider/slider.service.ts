import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface Slider {
  id: number;
  value: number;
}

@Injectable()
export class SliderService {
  constructor(private http: HttpClient) {}

  getAllSliders(): Observable<Slider[]> {
    return this.http.get<Slider[]>('http://142.93.17.255:3000/slider');
  }

  getSlider(id: number): Observable<Slider> {
    return this.http.get<Slider>('http://142.93.17.255:3000/slider/' + id);
  }

  insertSlider(slider: Slider): Observable<Slider> {
    return this.http.post<Slider>('http://142.93.17.255:3000/slider/', slider);
  }

  updateSlider(slider: Slider): Observable<void> {
    console.log(slider);
    return this.http.put<void>(
      'http://142.93.17.255:3000/slider/' + slider[0].id, slider[0]
    );
  }

  deleteSlider(slider: Slider) {
    return this.http.delete('http://142.93.17.255:3000/slider/' + slider);
  }
}
