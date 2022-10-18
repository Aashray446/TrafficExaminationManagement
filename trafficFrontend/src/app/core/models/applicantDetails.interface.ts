export interface eightPattern {
    lineTouch: boolean;
    poleTouch: boolean;
    fail: boolean;
    officerId: number;
}

export interface trafficLightPattern {
    uTurn: boolean;
    trafficLight: boolean;
    fail: boolean;
    officerId: number;
}

export interface rampPattern {
    breakerOne : boolean;
    breakerTwo : boolean;
    fail: boolean;
    failRemarks: string;
    officerId: number;
}

export interface lParkingPattern {
    onceForwarded: boolean;
    lineTouchFail: boolean;
    fail: boolean;
    officerId: number;
}

export interface behaviourPattern{
    first: boolean;
    second: boolean;
    third: boolean;
    fail: boolean;
    failRemarks: string;
    officerId: number;
}

export interface ApplicantDetails {
    eightPattern: eightPattern,
    trafficLightPattern: trafficLightPattern
    rampPattern: rampPattern,
    lParkingPattern: lParkingPattern,
    behaviourPattern: behaviourPattern;
}
