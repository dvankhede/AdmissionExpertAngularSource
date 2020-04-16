import { RoleModel } from './role.model';
import { StateModel } from './state.model';

export class UserModel
{
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public email: string;
    public mobile: number;
    public address: string;
    public city: string;
    public zipcode: string;
    public dateOfBirth: Date;
    public gender: string;
    public id;
    roleVO: RoleModel = new RoleModel();
    stateVO: StateModel = new StateModel();
}