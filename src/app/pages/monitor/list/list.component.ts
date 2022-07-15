import { Component, OnInit } from '@angular/core';
import { monitorModel } from 'src/app/models/monitor.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
list: monitorModel[]=[]

  constructor() { 
    this.list=[
       { id:'1' ,transStatus: 'ativ' ,tipoTransferencia: 'cons' ,  dataHoraInicial:'11:23 22/09/21' , dataHoraFinal:'11:00 22/09/22' , bucketOrigem: 'ouas', bucketDestino: 'ouous',  nomeArquivo: 'asd' , observacoes:'x' },
       { id:'2' ,transStatus: 'pass' ,tipoTransferencia: 'incos' ,  dataHoraInicial:'21:23 02/02/20' , dataHoraFinal:'11:00 15/12/21' , bucketOrigem: 'oues', bucketDestino: 'dsfa',  nomeArquivo: 'ads' , observacoes:'x' },
       { id:'3' ,transStatus: 'ativ' ,tipoTransferencia: 'incons' ,  dataHoraInicial:'14:23 22/9/14' , dataHoraFinal:'11:00 01/01/22' , bucketOrigem: 'ouis', bucketDestino: 'fhff',  nomeArquivo: 'vbcx' , observacoes:'x' },
       { id:'4' ,transStatus: 'ativ' ,tipoTransferencia: 'incons' ,  dataHoraInicial:'23:00 22/09/16' , dataHoraFinal:'11:00 01/08/22' , bucketOrigem: 'ouus', bucketDestino: 'osaf',  nomeArquivo: 'gfs' , observacoes:'x' },
       { id:'5' ,transStatus: 'pass' ,tipoTransferencia: 'incons' ,  dataHoraInicial:'00:01 22/4/21' , dataHoraFinal:'11:00 17/03/22' , bucketOrigem: 'ouvs', bucketDestino: 'odfs',  nomeArquivo: 'vdsf' , observacoes:'x' },
       { id:'6' ,transStatus: 'pass' ,tipoTransferencia: 'incons' ,  dataHoraInicial:'15:25 22/07/21' , dataHoraFinal:'11:00 14/07/21' , bucketOrigem: 'ouis', bucketDestino: 'asda',  nomeArquivo: 'dfs' , observacoes:'x' },
    ]
  }

  ngOnInit(): void {

  }


}
