export class AuthorizedUsers{
    loggedIn : boolean = false;
    studentIn : boolean = true;
    addminLogin(){
        this.loggedIn=true;
    }
    adminLogout(){
        this.loggedIn=false;
    }
    IsAdminAuthenticated(){
        return this.loggedIn
    }
    studentLogin(){
        this.studentIn=true;
    }
    studentLogout(){
        this.studentIn=false;
    }
    IsStudentAuthenticated(){
        return this.studentIn
    }
}