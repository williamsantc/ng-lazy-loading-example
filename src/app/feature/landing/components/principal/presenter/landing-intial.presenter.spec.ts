import { ApiLandingInitialService } from '@feature/landing/components/principal/service/api-landing-initial.service';
import { LandingInitialPresenter } from '@feature/landing/components/principal/presenter/landing-initial.presenter';
import { of } from 'rxjs';
import { ApiResponseModel } from '@shared/model/api-response.model';
import { ProductoModel } from '@feature/landing/shared/model/producto.model';
import { LoggerService } from '@shared/service/logger/logger.service';
import { ProductoFixture } from '@shared/fixtures/producto.fixture';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

describe('LandingInitialPresenter', () => {

  let apiLandingInitialService: SpyObj<ApiLandingInitialService>;
  let loggerService: SpyObj<LoggerService>;
  let presenter: LandingInitialPresenter;

  beforeEach(() => {
    apiLandingInitialService = createSpyObj<ApiLandingInitialService>(['getInitialText']);
    loggerService = createSpyObj<LoggerService>(['log']);
    presenter = new LandingInitialPresenter(apiLandingInitialService, loggerService);
  });

  it('should return just producto', (doneFn) => {
    // Arrange
    const httpResponse: ApiResponseModel<ProductoModel> = {
      data: ProductoFixture.defaultMock(),
      notification: null,
    };

    apiLandingInitialService.getInitialText.and.returnValue(of(httpResponse));

    // Act
    presenter.getInitialText().subscribe((producto) => {

      // Assert
      expect(producto).toBe(httpResponse.data);
      doneFn();
    });
  });
});
