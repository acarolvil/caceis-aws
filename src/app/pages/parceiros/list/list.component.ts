import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParceirosModel } from 'src/app/models/parceiros.model';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { Header } from 'primeng/api';
import { ColumnFilter } from 'primeng/table';
import { FilterMatchMode } from 'primeng/api';

import { SortEvent } from 'primeng/api';
import { ParceirosService } from 'src/app/service/parceiros.service';








@Injectable()

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  totalRecords: number;

  list: ParceirosModel[] = [];
  loading = false;
  constructor(
    private parceirosService: ParceirosService
  ) {

    this.totalRecords = this.list.length
    this.loading = true;
    this.parceirosService.getParceiros().subscribe(
      res => {
        this.list = res;
      },
      erro => {
        console.error(erro)
      },
      () => {
        setTimeout(() => {
           this.loading = false;
        }, 500);
      }
    );
  }

  ngOnInit(): void {
  }
}
