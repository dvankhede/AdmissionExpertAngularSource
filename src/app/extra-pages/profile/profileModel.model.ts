export class ProfileModel
{
    public firstName: string;
    public lastName: string;
    public email: string;
    public city: string;
    public address: string;
    public gender: string;
    public zipcode: string;
    public mobile: string; 
    public stateArray = new Array();
    public genderArray =[ {id:1 ,desc:'Male'},{id:2 , desc:'Female'}];
}