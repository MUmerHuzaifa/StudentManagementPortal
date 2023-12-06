import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../services/courseData.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  myCourses:any[];

  ngOnInit(): void {
    let userId = localStorage.getItem('userId')
    this.courseDataService.getAllCoursesAssignedToUser(userId).subscribe(courseDetails=>{
      this.showCoursesToStudent(courseDetails);
    })
      
  }
  
  constructor(private courseDataService:CourseDataService ){

  }

showCoursesToStudent(courses:any){
  this.myCourses=courses.success;
  console.log(this.myCourses)

}

}
