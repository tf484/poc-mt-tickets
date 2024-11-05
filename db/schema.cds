
using {
  cuid,
  managed
} from '@sap/cds/common';

type TicketNumber : Integer;
annotate TicketNumber with @(title : '{i18n>TicketNumber}');

type Description : String(60);
annotate Description with @(title : '{i18n>Description}');

entity Tickets : cuid, managed {
    ticketNumber: TicketNumber;
    Description: Description;
}

