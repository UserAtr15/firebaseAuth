import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  userId: string = '';

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
    console.log(data)
    //falta id
    })

    this.userService.viewUser(this.userId).subscribe(data => {
      console.log(data);
    })
  }

}
