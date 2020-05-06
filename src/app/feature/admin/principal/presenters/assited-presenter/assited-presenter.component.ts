import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@feature/admin/principal/presenters/base.component';
import { LoggerService } from '@shared/service/logger/logger.service';

@Component({
  selector: 'app-assited-presenter',
  templateUrl: './assited-presenter.component.html',
  styleUrls: ['./assited-presenter.component.scss']
})
export class AssitedPresenterComponent extends BaseComponent implements OnInit {

  constructor(loggerService: LoggerService) {
    super(loggerService);
  }

  ngOnInit(): void {
  }

}
