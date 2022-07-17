import { Component } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl:'./course-list.component.html'
})
export class CourseListComponent{
    courses: Course[] = []

    _filteredCourses: Course[] = []

    _filterBy: string;

    constructor(private courseService : CourseService) {

    }

    ngOnInit(): void {
        this.retrieveAll()
    }

    retrieveAll() : void{
        this.courseService.retrieveAll().subscribe({
            next: courses =>{
                this.courses = courses 
                this._filteredCourses = this.courses 
            },
            error: err => console.log('Erro',err.mensage)
        })
    }

    deleteById(courseId : number): void{
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                this.retrieveAll
                window.location.reload()
            },
            error: err => console.log('Erro',err.mensage)
        })
    }

    set filter(value: string){
        this._filterBy = value

        this._filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }
    get filter(){
        return this._filterBy
    }
}