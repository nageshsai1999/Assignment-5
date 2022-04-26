class user{
    constructor(Password,DOB, Login )
    {
        this.DOB=DOB;
        this.Login=Login;
        this.Password=Password;
    }
    set DOB(val){
        this.DOB=val;
    }
    set Login(val){
        this.Login=val;
    }
    set Password(val){
        this.Password=val;
    }
    get Login(){
        return this.Login;
    }
};