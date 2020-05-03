import { ProductoModel } from '@feature/landing/shared/model/producto.model';

export class ProductoMock {

  public static defaultMock(): ProductoModel {
    return {id: 1, cant: 20, nombre: 'martillo'};
  }
}
