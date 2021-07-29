import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchTodoComponent implements OnInit {
 id: any;
 firstName: string;
  private todo: Todo;

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.todo = new Todo();
    this.todoService.getTodoById(this.id).subscribe(data => {
      this.todo = data;
    });
  }

  onSubmit(id: any) {
    console.log(id);
    this.todoService.getTodoById(id).subscribe(data => {
      console.log(data);
      this.todo = data;
      console.log(this.todo);
    });

  }
}
