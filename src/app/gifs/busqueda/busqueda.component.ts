import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar')
  txtBuscar!: ElementRef<HTMLInputElement>; /* el ! es un operador que dice " tranca amigo, esta variable nunca sera nula"  */

  constructor(private gifService: GifsService) {}
  borrar() {
    const valor = this.txtBuscar.nativeElement.value;
    this.gifService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
