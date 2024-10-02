import { Component, OnInit } from '@angular/core';

interface Event {
  title: string;
  date: string;
  location: string;
  price: number;
  imageUrl: string;
  tags: string[];
  genre:string[];
}

@Component({
  selector: 'app-explore-events',
  templateUrl: './explore-events.component.html',
  styleUrls: ['./explore-events.component.css']
})
export class ExploreEventsComponent implements OnInit {
  categories: string[] = ['Music', 'Parties', 'Meetups', 'Conference', 'Trekking/Hiking', 'Adventure', 'Comedy', 'Traditional/Ethnic', 'Performing/ Visual Arts', 'Foods & Drinks'];
  selectedCategories: string[] = ['Music'];
  sortBy: string = 'date'; // Default sorting
  minPrice: number = 0;
  maxPrice: number = Infinity; // Use Infinity to indicate no upper limit
  searchTerm: string = '';
  allEvents: Event[] = [
    {
      title: "Find your Pride in San Francisco year-round fest",
      date: "Oct 1, Sat | 7:00 PM",
      location: "Oakland",
      price: 90.79,
      imageUrl: 'assets/sanfrancisco.png',
      tags: ['Most Popular'],
      genre:['Music','Adventure','Trekking']
    },
    {
      title: "Make a Difference: Give back at these events",
      date: "Dec 1, Sat | 7:00 PM",
      location: "Ireland",
      price: 57.79,
      imageUrl: 'assets/getoutgood.png',
      tags: ['New'],
      genre:['Music','Comedy','Trekking/Hiking']
    },
    {
      title: "Wear green and GTFO at St. Patrick's Day Special",
      date: "Nov 1, Sat | 7:00 PM",
      location: "Iceland",
      price: 57.79,
      imageUrl: 'assets/stpatrick.png',
      tags: ['Special'],
      genre:['Music','Trekking/Hiking','Meetups']
    },
    {
      title: "Find your Pride in San Francisco year-round fest",
      date: "Nov 1, Sat | 7:00 PM",
      location: "New-Zealand",
      price: 57.79,
      imageUrl: 'assets/sanfrancisco.png',
      tags: ['Most Popular'],
      genre:['Music','Comedy','']
    },
    {
      title: "Make a Difference: Give back at these events",
      date: "Oct 1, Sat | 7:00 PM",
      location: "Oakland",
      price: 90.79,
      imageUrl: 'assets/getoutgood.png',
      tags: ['New'],
      genre:['Music','Comedy','Trekking']
    },
    {
      title: "Wear green and GTFO at St. Patrick's Day Special",
      date: "Oct 1, Sat | 7:00 PM",
      location: "Timber-Land",
      price: 57.79,
      imageUrl: 'assets/stpatrick.png',
      tags: ['Special'],
      genre:['Music','Comedy','Trekking/Hiking']
    },
    {
      title: "Find your Pride in San Francisco year-round fest",
      date: "Oct 6, Sat | 7:00 PM",
      location: "Oakland",
      price: 90.79,
      imageUrl: 'assets/sanfrancisco.png',
      tags: ['Most Popular'],
      genre:['Comedy','Trekking/Hiking']
    },
    {
      title: "Make a Difference: Give back at these events",
      date: "Oct 5, Sat | 7:00 PM",
      location: "Ireland",
      price: 57.79,
      imageUrl: 'assets/getoutgood.png',
      tags: ['New'],
      genre:['Music','Comedy','Trekking/Hiking','Meetups']
    },
    {
      title: "Wear green and GTFO at St. Patrick's Day Special",
      date: "Oct 2, Sat | 7:00 PM",
      location: "Oakland",
      price: 90.79,
      imageUrl: 'assets/stpatrick.png',
      tags: ['Special'],
      genre:['Meetups','Trekking/Hiking','Adventure']
    },
    {
      title: "Find your Pride in San Francisco year-round fest",
      date: "Oct 1, Sat | 7:00 PM",
      location: "Oakland",
      price: 90.79,
      imageUrl: 'assets/sanfrancisco.png',
      tags: ['Most Popular'],
      genre:['Music','Adventure','Trekking']
    },
    {
      title: "Make a Difference: Give back at these events",
      date: "Dec 1, Sat | 7:00 PM",
      location: "Ireland",
      price: 57.79,
      imageUrl: 'assets/getoutgood.png',
      tags: ['New'],
      genre:['Music','Comedy','Trekking/Hiking']
    },
    {
      title: "Wear green and GTFO at St. Patrick's Day Special",
      date: "Nov 1, Sat | 7:00 PM",
      location: "Iceland",
      price: 57.79,
      imageUrl: 'assets/stpatrick.png',
      tags: ['Special'],
      genre:['Music','Trekking/Hiking','Meetups']
    },
    {
      title: "Find your Pride in San Francisco year-round fest",
      date: "Nov 1, Sat | 7:00 PM",
      location: "New-Zealand",
      price: 57.79,
      imageUrl: 'assets/sanfrancisco.png',
      tags: ['Most Popular'],
      genre:['Music','Comedy','']
    },
    {
      title: "Make a Difference: Give back at these events",
      date: "Oct 1, Sat | 7:00 PM",
      location: "Oakland",
      price: 90.79,
      imageUrl: 'assets/getoutgood.png',
      tags: ['New'],
      genre:['Music','Comedy','Trekking']
    },
    {
      title: "Wear green and GTFO at St. Patrick's Day Special",
      date: "Oct 1, Sat | 7:00 PM",
      location: "Timber-Land",
      price: 57.79,
      imageUrl: 'assets/stpatrick.png',
      tags: ['Special'],
      genre:['Music','Comedy','Trekking/Hiking']
    },
    {
      title: "Find your Pride in San Francisco year-round fest",
      date: "Oct 6, Sat | 7:00 PM",
      location: "Oakland",
      price: 90.79,
      imageUrl: 'assets/sanfrancisco.png',
      tags: ['Most Popular'],
      genre:['Comedy','Trekking/Hiking']
    },
    {
      title: "Make a Difference: Give back at these events",
      date: "Oct 5, Sat | 7:00 PM",
      location: "Ireland",
      price: 57.79,
      imageUrl: 'assets/getoutgood.png',
      tags: ['New'],
      genre:['Music','Comedy','Trekking/Hiking','Meetups']
    },
    {
      title: "Wear green and GTFO at St. Patrick's Day Special",
      date: "Oct 2, Sat | 7:00 PM",
      location: "Oakland",
      price: 90.79,
      imageUrl: 'assets/stpatrick.png',
      tags: ['Special'],
      genre:['Meetups','Trekking/Hiking','Adventure']
    }
  ];
  filteredEvents: Event[] = [];

  ngOnInit() {
    this.filteredEvents = this.allEvents;
  }

  clearFilters() {
    this.selectedCategories = [];
    this.minPrice = 0;
    this.maxPrice = Infinity;
    this.sortBy = 'date'; // Reset to default sorting
    this.searchTerm = ''; // Clear search term
    this.applyFilters(); // Re-apply filters
  }

  onCategoryChange(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index > -1) {
      this.selectedCategories.splice(index, 1); // Remove category if already selected
    } else {
      this.selectedCategories.push(category); // Add category if not selected
    }
    this.applyFilters();
  }

  sortEvents() {
   if (this.sortBy === 'price') {
      this.filteredEvents.sort((a, b) => a.price - b.price);
    }
  }

  onSearch() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredEvents = this.allEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategories.length === 0 || this.selectedCategories.some(cat => event.genre.includes(cat));
      const matchesPrice = event.price >= this.minPrice && (this.maxPrice === Infinity || event.price <= this.maxPrice);
      return matchesSearch && matchesCategory && matchesPrice;
    });
    this.sortEvents();
  }
}