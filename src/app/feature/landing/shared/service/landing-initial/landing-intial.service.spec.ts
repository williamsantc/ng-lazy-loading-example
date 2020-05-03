import { ApiLandingInitialService } from '@feature/landing/shared/service/api-landing-intial/api-landing-initial.service';
import { LandingInitialService } from '@feature/landing/shared/service/landing-initial/landing-initial.service';
import { of } from 'rxjs';
import { ApiResponseModel } from '@shared/model/api-response.model';
import { ProductoModel } from '@feature/landing/shared/model/producto.model';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import { LoggerService } from '@shared/service/logger/logger.service';
import { ProductoMock } from '@shared/mocks/Producto.mock';
import { async, TestBed } from '@angular/core/testing';

describe('LandingInitialService', () => {

  let apiLandingInitialService: SpyObj<ApiLandingInitialService>;
  let loggerService: SpyObj<LoggerService>;
  let testedService: LandingInitialService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        LandingInitialService,
        {
          provide: LoggerService,
          useValue: createSpyObj<LoggerService>(['log'])
        },
        {
          provide: ApiLandingInitialService,
          useValue: createSpyObj<ApiLandingInitialService>(['getInitialText'])
        }
      ]
    });
  }));

  beforeEach(() => {
    apiLandingInitialService = TestBed.inject(ApiLandingInitialService) as SpyObj<ApiLandingInitialService>;
    loggerService = TestBed.inject(LoggerService) as SpyObj<LoggerService>;
    testedService = TestBed.inject(LandingInitialService);
  });

  it('should return just producto', (doneFn) => {
    // Arrange
    const httpResponse: ApiResponseModel<ProductoModel> = {
      data: ProductoMock.defaultMock(),
      notification: null,
    };


    apiLandingInitialService.getInitialText.and.returnValue(of(httpResponse));

    // Act
    testedService.getInitialText().subscribe((producto) => {

      // Assert
      expect(producto).toBe(httpResponse.data);
      doneFn();
    });
  });
});
