import { AnswersService } from './../../../services/answers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
})
export class AnswersComponent implements OnInit {
  answers: { title: string; description: string }[] = [];
  constructor(private answersService:AnswersService) {}

  ngOnInit(): void {
    this.answers = this.answersService.getAnswers();
  }
  trackByFn(index: number) {
    return index;
  }
}
