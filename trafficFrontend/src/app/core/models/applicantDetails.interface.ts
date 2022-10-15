export interface ApplicantDetails {
    eightPattern: {
        lineTouch: boolean;
        poleTocuh: boolean;
        fail: boolean;
        officerId: number;
    },
    trafficLightPattern: {
        uTurn: boolean;
        trafficLight: boolean;
        fail: boolean;
        officerId: number;
    },
    rampPattern: {
        breakerOne : boolean;
        breakerTwo : boolean;
        fail: boolean;
        failRemarks: string;
        officerId: number;
    },
    lParkingPattern: {
        onceForwarded: boolean;
        lineTouchFail: boolean;
        fail: boolean;
        officerId: number;
    },
    behaviourPattern: {
        first: boolean;
        second: boolean;
        third: boolean;
        fail: boolean;
        failRemarks: string;
        officerId: number;
    },
}
