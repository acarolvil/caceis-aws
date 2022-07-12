



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  modalOpen=false
  

  
  constructor() { }

 
  ngOnInit(): void {
  this.modalOpen = true;
    

    
  }

}

