import { Component, OnInit } from '@angular/core';
import {journalService} from '../../service/journalService'
import {journals} from '../../interface/journal.interface'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journals: Array<journals> = [];

  constructor(public jL: journalService) {
    
   }

  ngOnInit() {
    this.jL.getList()
      .subscribe((journal) => {
        this.journals = journal;
      });
  }

}

