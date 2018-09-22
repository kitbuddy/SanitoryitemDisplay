import { Component, OnInit } from '@angular/core';
import { ProvideTestJsonService } from '../../services/provide-test-json.service'

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {

  // serviceTest: any

  data: any = {}
  
  constructor(
   
    private serviceTest: ProvideTestJsonService,
    
  ) {

    this.serviceTest = serviceTest
  }

  ngOnInit() {
      this.showTestjson()
  }

  
  
  showTestjson() {

    this.serviceTest.returnTestData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }


}
