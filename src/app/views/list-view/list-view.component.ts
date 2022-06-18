import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  // Dummy data
  reactors = [
    { name: 'Pressurized Water Reactor (PWR)' },
    { name: 'Boiling Water Reactor (BWR)' },
    { name: 'Advanced Gas-Cooled Reactor (AGR)' },
    { name: 'Light Water Graphite-Moderated Reactor (LWGR)' },
    { name: 'Fast Neutron Reactor (FNR)' },
    { name: 'Operable Nuclear Power Plants' },
    { name: 'Short Title' }
  ];

  // CHILD tooltip behaviors
  showsTooltip = false;
  tooltipText = 'This is default parent component text';
  topPosition: any;
  leftPosition: any;

  constructor() { }

  ngOnInit(): void { }

  private resetTooltip() {
    this.showsTooltip = false;
    this.tooltipText = '';
    this.topPosition = null;
    this.leftPosition = null;
  }

  // Tooltip methods
  onHover(tooltipText: string, e: MouseEvent) {
    this.showsTooltip = true;
    this.tooltipText = tooltipText;
    this.topPosition = e.clientY;
    this.leftPosition = e.clientX;
  }
  onMouseout() { this.resetTooltip(); }
}
