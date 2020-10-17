import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module'


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public menuExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.menuExpanded = !this.menuExpanded
  }

}
