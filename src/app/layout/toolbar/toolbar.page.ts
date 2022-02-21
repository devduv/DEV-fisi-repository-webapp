import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.page.html',
  styleUrls: ['./toolbar.page.scss'],
})
export class ToolbarPage implements OnInit {
  @Output()
  public showMenuEmmitter: EventEmitter<void> = new EventEmitter();

  @Output()
  public showPreferencesEmmitter: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  showMenu() {
    this.showMenuEmmitter.emit();
  }

  showPreferences() {
    this.showPreferencesEmmitter.emit();
  }
}
