import { Component } from '@angular/core';

interface TrendingEvent {
  imageUrl: string;
  title: string;
  date: string;
  location: string;
  price: number;
  buyNowLink: string;
  tags: string[];
}

@Component({
  selector: 'app-trending-events',
  templateUrl: './trending-events.component.html',
  styleUrls: ['./trending-events.component.css']
})
export class TrendingEventsComponent {
  trendingEvents: TrendingEvent[] = [
    {
      imageUrl: 'assets/sanfrancisco.png',
      title: 'Find your Pride in San Francisco year-round fest',
      date: 'Oct 1, Sat | 7:00 PM Onwards',
      location: 'Oakland',
      price: 57.79,
      buyNowLink: '#',
      tags: ['Most popular']
    },
    {
      imageUrl: 'assets/getoutgood.png',
      title: 'Make a Difference: Give back at these events',
      date: 'Oct 1, Sat | 7:00 PM Onwards',
      location: 'Oakland',
      price: 57.79,
      buyNowLink: '#',
      tags: ['Best price guaranteed']
    },
    {
      imageUrl: 'assets/stpatrick.png',
      title: "Wear green and GTFO at St. Patrick's Day Special",
      date: 'Oct 1, Sat | 7:00 PM Onwards',
      location: 'Oakland',
      price: 57.79,
      buyNowLink: '#',
      tags: ['Most popular']
    },
    {
      imageUrl: 'assets/womenhistory.png',
      title: "Women's History Month",
      date: 'Oct 1, Sat | 7:00 PM',
      location: 'Oakland',
      price: 57.79,
      buyNowLink: '#',
      tags: ['Top selling']
    },
  ];
}