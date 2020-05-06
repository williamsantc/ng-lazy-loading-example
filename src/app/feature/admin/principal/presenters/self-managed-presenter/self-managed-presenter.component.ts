import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@feature/admin/principal/presenters/base.component';
import { LoggerService } from '@shared/service/logger/logger.service';

@Component({
  selector: 'app-self-managed-presenter',
  templateUrl: './self-managed-presenter.component.html',
  styleUrls: ['./self-managed-presenter.component.scss']
})
export class SelfManagedPresenterComponent extends BaseComponent implements OnInit {

  constructor(loggerService: LoggerService) {
    super(loggerService);
  }

  ngOnInit(): void {
  }

}
