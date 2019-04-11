import {Component, OnDestroy, OnInit} from '@angular/core';
import {SliderService} from './slider.service';
import {Observable, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  constructor(private slider: SliderService) {
  }
  people: any = [];
  sliderValue: Array<number> = new Array<number>();
  timerSubscription: Subscription;
  ngOnInit() {
    this.getSlider();
  }
  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  getSlider() {
    this.people = [];
      this.slider.getAllSliders().subscribe((data: {}) => {
        this.people = data;

        this.updateValue(this.people);
        this.subscribeToData();
      });
  }

  updateSlider(index) {
    this.updateSliderValue();
    this.slider.updateSlider(this.people, index).subscribe((res) => {
      console.log('Updated the slider');
    });
  }

  private subscribeToData(): void {
    this.timerSubscription = timer(5000).subscribe(() => this.getSlider());
  }

  updateValue(value) {
      this.sliderValue[0] = value[0].slide;
      this.sliderValue[1] = value[1].slide;
  }

  updateSliderValue() {
    this.people[0].slide = this.sliderValue[0];
    this.people[1].slide = this.sliderValue[1];
    console.log('UpdateSliderValue');
    console.log(this.people[0].slide);
  }
}
