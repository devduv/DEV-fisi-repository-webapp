import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course.model';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  public courses: Course[];
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  async getCourses() {
    this.courses = await this.coursesService.getCourses();
  }
}
