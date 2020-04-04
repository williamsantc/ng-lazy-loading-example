import { ProductoModel } from '@feature/landing/model/producto.model';

export class ProductoMock {

  public static defaultMock(): ProductoModel {
    return {id: 1, cant: 20, nombre: 'martillo'};
  }
}
