export default class Queues {
    Id?: string;
    QueueNumber : string;
    AppointmentId : string;
    QueueDate: string;
    CurrentService : string;

    // DynamicFields: string;

    constructor(
        id: string,
        queueNumber : string,
        appointmentId : string,
        queueDate: string,
        currentService : string,
        ) {
        this.Id = id;
        this.QueueNumber = queueNumber;
        this.AppointmentId = appointmentId;
        this.QueueDate = queueDate;
        this.CurrentService = currentService;
       
    } 
}