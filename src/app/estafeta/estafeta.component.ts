import { Component, OnInit } from '@angular/core';
import {EstafetaService} from './estafeta.service'
import {Estafeta} from './Estafeta';
@Component({
  selector: 'app-estafeta',
  templateUrl: './estafeta.component.html',
  styleUrls: ['./estafeta.component.css']
})
export class EstafetaComponent implements OnInit {

  Estafetas: Estafeta[] = [];

  constructor(
    private estafetaService: EstafetaService
  ) { }

  getEstafetas(): void {
    this.estafetaService.getEstafetas()
        .subscribe(
          est  => this.Estafetas= est
          );
        
  }

  ngOnInit(): void {
      this.getEstafetas()
      
  }

}
