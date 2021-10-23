import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifService: GifsService) {}

  get historial() {
    return this.gifService.getHistorial;
  }

  mostrarImagenes(query: string): void {
    this.gifService.buscarGifs(query);
  }

  ngOnInit(): void {}
}
