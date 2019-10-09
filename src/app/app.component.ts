import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

ngOnInit(){
  of(2,4,6,8).subscribe(console.log);

from([20, 15, 10, 5]).subscribe(
  item => console.log(`resulting item ..${item}`),
  err => console.error(`error occureed ${err}`),
  () => console.log('Complete')
  );

  of ('Rakesh', 'Denis', 'Mike')
    .subscribe(
      Rakesh => console.log('Rakesh was emiited ${Rakesh}'),
      err => console.error('Error occured: ${err}'),
      () => console.log('No more employees, go home')
    );
  }
}
