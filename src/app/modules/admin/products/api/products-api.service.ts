import { Injectable } from '@angular/core';
import { BaseService } from '../../../../core/services/base.service';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product.model';

const BASE_URL_PRODUCT = 'products'

/** SERVICE para a API de produtos que extende o baseService*/
@Injectable({
  providedIn: 'root'
})
export class ProductsApiService extends BaseService<IProduct> {

  constructor(protected override readonly http: HttpClient) { 
    super(http)
    this.BASE_URL = BASE_URL_PRODUCT;
  }
}
