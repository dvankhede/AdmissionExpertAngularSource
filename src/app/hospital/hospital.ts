

export class Hospital {
    constructor(
        name: String,
        address: String,
        city: String,
        zipcode: number,
        stateId: number) {
        this.name = name;
        this.address = address
        this.city = city;
        this.stateId = stateId;
        this.zipcode = zipcode;

    }

    private name: String;
    private address: String;
    private city: String;
    private zipcode: number;
    private stateId: number;


}