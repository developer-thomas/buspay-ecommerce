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
   
    /** Inicializa a store com os produtos */
    setProducts(products: IProduct[]) {
        this.productsSubject.next(products);
        this.filteredProductsSubject.next(products); 
    }

    /** Define os produtos filtrados na store */
    setFilteredProducts(products: IProduct[]) {
        this.filteredProductsSubject.next(products);  
    }

    /** Define o loading na store */
    setLoading(loading: boolean) {
        this.loadingSubject.next(loading);
    }
    

    /** Define um novo produto na store */
    setNewProduct(product: IProduct) {
        const products = this.productsSubject.value;

        // preciso deixar atualizado tanto na store quanto no filteredStore
        this.productsSubject.next([...products, product]);
        this.filteredProductsSubject.next([...products, product]);
    }

    /** Define um produto removido na store */
    setRemovedProduct(productId: number) {
        const products = this.productsSubject.value;

        // preciso deixar atualizado, tambe´m, tanto na store quanto no filteredStore
        this.productsSubject.next(products.filter(p => p.id !== productId));
        this.filteredProductsSubject.next(products.filter(p => p.id !== productId));

        console.log(this.productsSubject.value);
    }

    /** Retorna um produto da store pelo id */
    getProductById(productId: number) {
        const products = this.productsSubject.value;
        return products.find(p => p.id === productId);
    }

}