import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/core/models/student.model';
import { StudentService } from '../../../../../core/services/student.service';
import { MenuService } from '../../../../../core/services/menu.service';
import { MenuOption } from '../../../../../core/models/menu.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {

  public student:IStudent;

  constructor(
    private serviceStudent:StudentService,
    private menuService:MenuService
  ) { }

  ngOnInit(): void {

        // Pintar el icono settings en menu
        this.menuService.goTo(MenuOption.SETTINGS);

        // Obtener estudiante
        this.serviceStudent.getStudentById(1).subscribe(({data:{data}})=>{
          this.student=data;
        })
  }

}
