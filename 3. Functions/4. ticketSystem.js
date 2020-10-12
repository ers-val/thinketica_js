function TicketSystem() {
    this.state = {
        balance: 0,
        availableTickets: {},
        boughtTickets: {},
    };

    this.createEvent = (type, sum) => {
        this.state.availableTickets[type] = sum;
    };

    this.generateId = () => {
        while (true) {
            var id = String(Math.round(Math.random() * 899999) + 100000);
            if (!this.state.boughtTickets.hasOwnProperty(id)) {
                return id;
            }
        }
    };

    this.buyTicket = (event) => {
        if (this.state.availableTickets.hasOwnProperty(event)) {
            var id = this.generateId();
            var sum = this.state.availableTickets[event];
            this.state.boughtTickets[id] = sum;
            this.state.balance += sum;
            return id;
        }
    };

    this.returnTicket = (id) => {
        if (this.state.boughtTickets.hasOwnProperty(id)) {
            this.state.balance -= this.state.boughtTickets[id];
            delete this.state.boughtTickets[id];
        }
    };
}

/* * */
var ticketWindow = new TicketSystem();
console.log(ticketWindow.state);
ticketWindow.createEvent("Concert", 500);
var ticket1 = ticketWindow.buyTicket("Concert");
console.log(ticket1);
console.log(ticketWindow.state);
var ticket2 = ticketWindow.buyTicket("Test");
console.log(ticketWindow.state);
ticketWindow.returnTicket("123456");
ticketWindow.returnTicket(ticket1);
console.log(ticketWindow.state);
