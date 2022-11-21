import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  
  private id:string | null = "0"
  
  
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
      )
      this.setValuesToComponent(this.id);
    console.log('SUCESSO')
  }

   setValuesToComponent(id:string | null){
    const result = dataFake.filter(a => a.id == id)[0];
     console.log( 'teste',result)

   this.contentTitle = result.title
     this.contentDescription = result.description
     this.photoCover = result.photo
     
  }

}
