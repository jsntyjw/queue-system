export default class Bookings {
    Id?: string;
    Nric: string;
    CitizenName: string;
    CitizenSalutation: string;
    CitizenEmail: string;
    CitizenNumber: string;

    ServiceName: string;
    ServiceProviderName: string;
    ServiceProviderEmail: string;
    ServiceProviderPhone: string;
    ServiceStartDate: string;
    ServiceStartTime : string;
    // ServiceEndDateTime: string;

    ServiceProviderLocation: string;

    // BookingCreationDate: string;
    // BookingLocation: string;
    // BookingDescription: string;
    // BookingReference: string;
    BookingStatus: string;

    // DynamicFields: string;

    constructor(
        id: string,
        nric: string,
        citizenName: string,
        citizenSalutation: string,
        citizenEmail: string,
        citizenNumber: string,

        serviceName: string,
        serviceProviderName: string,
        serviceProviderEmail: string,
        serviceProviderPhone: string,
        serviceStartDate: string,
        serviceStartTime: string,
        serviceProviderLocation: string,

        // bookingCreationDate: string,
        // bookingLocation: string,
        // bookingDescription: string,
        // bookingReference: string,
        bookingStatus: string,
        // dynamicFields: string,
        ) {
        this.Id = id;
        this.Nric = nric;
        this.CitizenName = citizenName;
        this.CitizenNumber = citizenNumber;
        this.CitizenSalutation = citizenSalutation;
        this.CitizenEmail = citizenEmail;

        this.ServiceName = serviceName;
        this.ServiceProviderName = serviceProviderName;
        this.ServiceProviderEmail = serviceProviderEmail;
        this.ServiceProviderPhone = serviceProviderPhone;
        this.ServiceStartDate = serviceStartDate;
        this.ServiceStartTime = serviceStartTime;

        this.ServiceProviderLocation = serviceProviderLocation;

        // this.BookingCreationDate = bookingCreationDate;
        // this.BookingLocation = bookingLocation;
        // this.BookingDescription = bookingDescription;
        // this.BookingReference = bookingReference;

        
        // this.ServiceEndDateTime = serviceEndDateTime;
        this.BookingStatus = bookingStatus;
        // this.DynamicFields = dynamicFields;
    } 
}