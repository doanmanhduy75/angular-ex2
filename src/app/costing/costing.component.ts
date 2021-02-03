import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costing',
  templateUrl: './costing.component.html',
  styleUrls: ['./costing.component.css']
})
export class CostingComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  vars = [
    {name: "MONTH TO DATE", value: 2030.59, currencyUnit: "$"},
    {name: "ESTIMATED SPEND", value: 1020, currencyUnit: "$"},
    {name: "LAST MONTH", value: 50000, currencyUnit: "$"},
  ]

  clickHome(){
    this.router.navigateByUrl("/login");
  }
}
