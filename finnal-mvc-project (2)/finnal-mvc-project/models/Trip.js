class Trip {
  static trips = []; // Статическая переменная для хранения всех поездок

  constructor(description, date, transport, hotel) {
      this.description = description;
      this.date = date;
      this.transport = transport;
      this.hotel = hotel;
  }

  static addTrip(trip) {
      this.trips.push(trip);
  }

  static getAllTrips() {
      return this.trips;
  }

  static getTripById(id) {
      return this.trips[id];
  }

  static updateTrip(id, description, date, transport, hotel) {
      let trip = this.getTripById(id);
      if (trip) {
          trip.description = description;
          trip.date = date;
          trip.transport = transport;
          trip.hotel = hotel;
          return trip;
      }
      return null;
  }

  static deleteTrip(id) {
      if (this.getTripById(id)) {
          this.trips.splice(id, 1);
          return true;
      }
      return false;
  }
}

module.exports = Trip;
