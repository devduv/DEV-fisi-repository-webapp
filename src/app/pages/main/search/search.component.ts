import { Component, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/core/models/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  public search: string;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.menuService.goTo(MenuOption.SEARCH);

    this.getParams();
    this.loadPreferences();
  }

  loadPreferences() {
  }

  getParams() {
    this.route.queryParamMap.subscribe((p: any) => {
      this.search = p.params.q;
    });
    console.log(this.search);
  }

  searchEmitter($event: string) {
    console.log($event);
    this.search = $event;
  }
}
