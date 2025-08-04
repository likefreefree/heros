import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss'
})
export class Test1Component {
  title:string = 'Test1Component works!';
  constructor() {
    console.log('Test1Component initialized');
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
