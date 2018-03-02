import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products: Product[];

  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i mdTooltip="Tooltip!" class="fa fa-close"></i>'
    },
    add: {
      confirmCreate: true,
      addButtonContent	: '<i mdTooltip="Tooltip!" class="fa fa-plus"></i>',
      createButtonContent: '<i mdTooltip="Tooltip!" class="fa fa-save"></i>',
      cancelButtonContent: '<i mdTooltip="Tooltip!" class="fa fa-close"></i>'
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i mdTooltip="Tooltip!" class="fa fa-edit"></i>',
      saveButtonContent: '<i mdTooltip="Tooltip!" class="fa fa-save"></i>',
      cancelButtonContent: '<i mdTooltip="Tooltip!" class="fa fa-close"></i>'
    },
    // actions: {

    //   custom: [
    //     {
    //       name: 'addToCart',
    //       title: '<i class="fa fa-shopping-cart"></i>'
    //     },
    //   ]
    // },
    columns: {
      // _id: {
      //   title: 'ID',
      //   type: 'string'
      // },
      name: {
        title: 'Product Name',
        type: 'string'
      },
      price: {
        title: 'Price',
        type: 'number'
      },
      sellerName: {
        title: 'Seller',
        type: 'string'
      },
      createdAt: {
        title: 'createdAt',
        editable: false
      },
      updatedAt: {
        title: 'updatedAt',
        editable: false
      }
    }
  };

  constructor(private storeService: StoreService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts(): void {
    this.storeService.getProducts().subscribe(products => this.products = products.data);
  }


  onDeleteConfirm(event) {
    this.storeService.deleteProduct(event.data).subscribe(
      response => response.err == null ? event.confirm.resolve() : event.confirm.reject()
    );
  }

  onCreateConfirm(event) {
    this.storeService.createProduct(event.newData).subscribe(
      response => response.err == null ? event.confirm.resolve(response.data) : event.confirm.reject()
    );
  }

  onSaveConfirm(event) {
    // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
    this.storeService.updateProduct(event.newData).subscribe(
      response => response.err == null ? event.confirm.resolve(event.newData) : event.confirm.reject()
    );
  }

  // onCustom(event) {
  //   this.cartService.addProduct(event.data);
  // }
}
