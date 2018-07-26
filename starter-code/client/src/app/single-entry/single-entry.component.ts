import { Component, OnInit } from '@angular/core';
import {journalService} from '../../service/journalService'
import {journals} from '../../interface/journal.interface'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  journal: any;

  constructor(
    private route: ActivatedRoute,
    public jL: journalService) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.getListDetails(params.id);
    });
  }

  getListDetails(id) {
    this.jL.get(id)
      .subscribe((journal) => {
        this.journal = journal;
      });

  }

}
