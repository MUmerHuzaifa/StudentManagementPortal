import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../services/courseData.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  myCourses:any[];
  filteredCourses:any[];

  ngOnInit(): void {
    let userId = localStorage.getItem('userId')
    this.courseDataService.getAllCoursesAssignedToUser(userId).subscribe(courseDetails=>{
      this.showCoursesToStudent(courseDetails,userId);
    })
      
  }
  
  constructor(private courseDataService:CourseDataService ){

  }

showCoursesToStudent(courses:any,userId:any){
  this.myCourses=courses.success;
  // To filter courses on id basic of logged in user
  // this.myCourses=courses.success.filteredCourses.filter(course => course._id == userId);
  console.log(this.filteredCourses)

}

}
