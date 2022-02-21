import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent implements OnInit {
  public value = '';

  constructor() {}

  ngOnInit(): void {}
}
