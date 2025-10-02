import { Injectable, signal } from "@angular/core";
import { IProduct } from "../models/product.model";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ProductsStore {
    private productsSubject = new BehaviorSubject<IProduct[]>([]);
    private filteredProductsSubject = new BehaviorSubject<IProduct[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    
    products$ = this.productsSubject.asObservable();
    loading$ = this.loadingSubject.asObservable();
    filteredProducts$ = this.filteredProductsSubject.asObservable();
   
    /**
     * Esse método inicializa a store com os produtos 
     * @param products O objeto do produto inteiro
     */
    setProducts(products: IProduct[]) {
        this.productsSubject.next(products);
        this.filteredProductsSubject.next(products); 
        
    }

    /**
     * Esse método seta um novo item filtrado no storage
     * @param products O produto inteiro, o filtro será por alguma prop
     */
    setFilteredProducts(products: IProduct[]) {
        this.filteredProductsSubject.next(products);  
    }

    /**
     * Esse método seta o loading no storage
     * @param loading 
     */
    setLoading(loading: boolean) {
        this.loadingSubject.next(loading);
    }

    // Para paginação
    setPage(page: number) {
      const products = this.filteredProductsSubject.value;
    }

    // ============= CRUD =============
    addProduct(product: IProduct) {
        const products = this.productsSubject.value;
        this.productsSubject.next([...products, product]);
    }
}