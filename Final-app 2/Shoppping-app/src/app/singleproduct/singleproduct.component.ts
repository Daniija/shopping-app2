import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ItemInterface } from '../interfaces/items';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  products: any = []

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }


  ngOnInit(): void {
    this.getProductbyId(this.activatedRoute.snapshot.paramMap.get('id'))
  }

  getProductbyId(id: any) {
    this.dataService.getAllItemsbyId(id).subscribe((data: any) => {
      this.products = data.data
      console.log(this.products);
    })
  }

}
