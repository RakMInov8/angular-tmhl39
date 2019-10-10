import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs';
import {map,tap,take} from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

ngOnInit(){
  of(2,4,6,8).subscribe(console.log);

from([20, 15, 10, 5])
  .pipe(
        tap(item => console.log(`emitted item ..${item}`)),
        map(item => item*2),
        map(item => item-10)
  ).subscribe(
    item => console.log(`resulting item ..${item}`),
    err => console.error(`error occureed ${err}`),
    () => console.log('Complete')
  );

  of('Rakesh', 'Denis', 'Mike')
    .subscribe(
      emp => console.log(`Employees was emiited ${emp}`),
      err => console.error(`Error occured: ${err}`),
      () => console.log(`No more apples, go home`)
    );
  }
}
