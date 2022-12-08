import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patio',
  templateUrl: './patio.component.html',
  styleUrls: ['./patio.component.css']
})
export class PatioComponent implements OnInit {

  constructor() { }
  teste : Array<number>=[1,2,3,4,5,6,7]
  ngOnInit(): void {
  }

}
