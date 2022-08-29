import { statusMatch } from "src/constants/StatusMatch"

export class Match {
    private client1_id: number
    private client2_id: number
    private pro_id: number
    private status: statusMatch

    constructor(client1_id, client2_id, pro_id, status) {
        this.client1_id = client1_id;
        this.client2_id = client2_id;
        this.pro_id = pro_id;
        this.status = status;
    }

    
    public get idC1() : number {
        return this.client1_id
    }

    public get idC2() : number {
        return this.client2_id
    }

    public get idP() : number {
        return this.pro_id
    }
    
    public get getStatus() : statusMatch {
        return this.status
    }
    
}