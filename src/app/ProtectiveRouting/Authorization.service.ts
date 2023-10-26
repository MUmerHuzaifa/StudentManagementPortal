export class AuthorizedUsers{
    loggedIn : boolean = true;
    studentIn : boolean = true;
    newPassword : boolean = false;
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
    IsPasswordResetSuccessfully(){
        return this.newPassword
    }
}