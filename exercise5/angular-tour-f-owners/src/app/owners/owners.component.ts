import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Owner }         from '../owner';
import { OwnerService }  from '../owner.service';

@Component({
  selector: 'app-Owner',
  templateUrl: './owners.component.html',
  styleUrls: [ './owners.component.css' ]
})
export class OwnersComponent implements OnInit {
  owners:Owner[];
  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOwners();
  }
  getOwners():void {
    this.ownerService.getOwners().subscribe(owners=>this.owners=owners);
  }  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.ownerService.addOwner({ name } as Owner)
      .subscribe(owner => {
        this.owners.push(owner);
      });
  }
}