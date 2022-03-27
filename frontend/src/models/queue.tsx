export default class Queues {
    Id?: string;
    QueueNumber : string;
    AppointmentId : string;
    QueueDate: string;
    CurrentService : string;
    MissedQueue: boolean


    // DynamicFields: string;

    constructor(
        id: string,
        queueNumber : string,
        appointmentId : string,
        queueDate: string,
        currentService : string,
        missedQueue: boolean
        ) {
        this.Id = id;
        this.QueueNumber = queueNumber;
        this.AppointmentId = appointmentId;
        this.QueueDate = queueDate;
        this.CurrentService = currentService;
        this.MissedQueue = missedQueue
    } 
}