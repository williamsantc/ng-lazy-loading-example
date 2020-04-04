import { ApiLandingInitialService } from '@feature/landing/service/api-landing-intial/api-landing-initial.service';
import { LandingInitialService } from '@feature/landing/service/landing-initial/landing-initial.service';
import { of } from 'rxjs';
import { ApiResponseModel } from '@shared/model/api-response.model';
import { ProductoModel } from '@feature/landing/model/producto.model';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import { LoggerService } from '@shared/service/logger/logger.service';
import { ProductoMock } from '@shared/mocks/Producto.mock';

describe('LandingInitialService', () => {

  let apiLandingInitialService: SpyObj<ApiLandingInitialService>;
  let loggerService: SpyObj<LoggerService>;
  let testedService: LandingInitialService;

  beforeEach(() => {
    apiLandingInitialService = createSpyObj<ApiLandingInitialService>(['getInitialText']);
    loggerService = createSpyObj<LoggerService>(['log']);
    testedService = new LandingInitialService(apiLandingInitialService, loggerService);
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
