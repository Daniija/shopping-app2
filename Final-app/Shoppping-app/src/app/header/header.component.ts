import { Component, OnInit } from '@angular/core';
import { ItemInterface } from '../interfaces/items';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  carts: ItemInterface[] = [];
  constructor(private dataService: DataService) { }

  getAllitems() {
    this.dataService.getAllItems().subscribe((data: any) => {
      this.carts = data.data;
      console.log(this.carts);
    })
  }

  ngOnInit(): void {
    this.getAllitems();
  }

}
