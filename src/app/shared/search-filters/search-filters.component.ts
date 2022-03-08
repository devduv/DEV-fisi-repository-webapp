import { Component, OnInit } from '@angular/core';
import { PreferencesService } from 'src/app/core/services/preferences.service';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
})
export class SearchFiltersComponent implements OnInit {
  constructor(public preferencesService: PreferencesService) {}

  ngOnInit(): void {}
}
