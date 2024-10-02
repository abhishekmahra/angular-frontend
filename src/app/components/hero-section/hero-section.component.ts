import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  carouselItems = [
    { imageUrl: 'assets/Image7.png', title: 'MUSIC FESTIVALS GUIDE 2024', subtitle: 'Curated by ticketfly' },
    { imageUrl: 'assets/Image8.png', title: 'SUMMER CONCERTS 2024', subtitle: 'Find your rhythm' },
    { imageUrl: 'assets/Image9.png', title: 'INDIE ARTIST SPOTLIGHT', subtitle: 'Discover new talents' },
  ];

  genres = [
    { name: 'Party', icon: 'assets/party.svg', events: 20 },
    { name: 'Comedy', icon: 'assets/comedy.svg', events: 20 },
    { name: 'Conference', icon: 'assets/conference.svg', events: 5 },
    { name: 'Trek', icon: 'assets/trips.svg', events: 2 },
    { name: 'Concert', icon: 'assets/music.svg', events: 12 },
    { name: 'Meetups', icon: 'assets/Group.svg', events: 2 },
  ];

  currentSlide = 0;

  ngOnInit() {
    this.autoSlide();
  }

  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  getSlideIndex(offset: number): number {
    return (this.currentSlide + offset + this.carouselItems.length) % this.carouselItems.length;
  }
}