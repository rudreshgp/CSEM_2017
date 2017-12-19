import { Component, OnInit, Input } from '@angular/core';
import { Owner }         from '../owner';
import { OwnerService }  from '../owner.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  @Input() owner: Owner;
  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOwner();
  }

  getOwner(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwner(id)
      .subscribe(Owner => this.owner = Owner);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
  this.ownerService.updateOwner(this.owner)
      .subscribe(() => this.goBack());
  }
}
