import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStudent } from 'src/app/core/models/student.model';
import { StudentService } from '../../../../../core/services/student.service';
import { MenuService } from '../../../../../core/services/menu.service';
import { MenuOption } from '../../../../../core/models/menu.model';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html'
})
export class EditPerfilComponent implements OnInit {
  
  public student:IStudent

  public miFormulario:FormGroup=this.fb.group({
    names:[""],
    lastName:[""],
    usuario:[""],
    email:[""],
    ciclo:[""],
    plan:[""],
    escuela:[""]
  });

  constructor(
    private fb:FormBuilder,
    private serviceStudent:StudentService,
    private menuService:MenuService
    ) { }

  ngOnInit(): void {
    
    // Pintar el icono settings en menu
    this.menuService.goTo(MenuOption.SETTINGS);

    // Obtener estudiante
    this.serviceStudent.getStudentById(1).subscribe(({data:{data}})=>{
      this.student=data;
      this.miFormulario=this.fb.group({
        id:[this.student.id, [Validators.required]],
        names:[this.student.names, [Validators.required]],
        lastName:[this.student.lastName, [Validators.required]],
        secondLastName:[this.student.secondLastName, [Validators.required]],
        usuario:["Pucho007", [Validators.required]],
        email:[this.student.email, [Validators.required, Validators.email]],
        ciclo:["10", [Validators.required]],
        plan:["2014", [Validators.required]],
        escuela:["Ingenieria de Sistemas", [Validators.required]]
      });
      
    });
  }


  checkValidForm(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  saveStudent(){

    this.student=this.miFormulario.value;

    this.serviceStudent.updateStudentById(this.student).subscribe((data)=>{
      this.ngOnInit();
    });
  }

}
