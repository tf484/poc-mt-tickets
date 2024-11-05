using {Tickets as schemaTickets} from '../db/schema';

service TicketsService {
    entity Tickets as projection on schemaTickets;
    annotate Tickets with @odata.draft.enabled;
}
