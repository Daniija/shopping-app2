import { Component, OnInit } from '@angular/core';
import { ItemInterface } from '../interfaces/items';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ItemInterface[] = [];

  constructor(private dataService: DataService) { }

  getAllitems() {
    this.dataService.getAllItems().subscribe((data: any) => {
      this.products = data.data;
      console.log(this.products);
    })
  }

  getProductbyId(id: any) {
    this.dataService.getAllItemsbyId(id).subscribe((data: any) => {
      this.products = data.data
      console.log(this.products);
    })
  }

  ngOnInit(): void {
    this.getAllitems()
  }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}
