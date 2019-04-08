import { Component, OnInit } from '@angular/core';
import {SliderService} from './slider.service';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSliderModule} from '@angular/material';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private slider: SliderService, private route: ActivatedRoute, private router: Router) { }
  people: any = [];
  sliderValue: number;
  ngOnInit() {
    this.getSlider();
    this.updateSlider(this.people);
  }

  getSlider() {
    this.people = [];
    this.slider.getAllSliders().subscribe((data: {}) => {
      this.people = data;
      this.updateValue(this.people.slider[0].slide);
    });
  }

  updateValue(value) {
    this.sliderValue = value;
  }

  updateSliderValue() {
    this.people.slider[0].slide = this.sliderValue;
    console.log(this.people.slider);
  }

  updateSlider(value) {
    this.slider.updateSlider(value).subscribe((result) => {
      this.people.slider[0].slide = this.sliderValue;
      result = this.people;
    }, (err) => {
      console.log(err);
    });
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
