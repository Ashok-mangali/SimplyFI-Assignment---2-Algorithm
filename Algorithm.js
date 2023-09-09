function findTravelRoute(tickets) {
    const ticketMap = new Map();
  
    // Create a map of tickets with cities as keys and destinations as values
    for (const ticket of tickets) {
      const [from, to] = ticket.split('-');
      ticketMap.set(from, to);
    }
  
    const route = [];
    let currentCity = 'Hyderbad'; // Start with Kiev
  
    // Trace the route until we reach the last city
    while (ticketMap.has(currentCity)) {
      const nextCity = ticketMap.get(currentCity);
      route.push(`${currentCity}-${nextCity}`);
      currentCity = nextCity;
    }
  
    return route;
  }
  
  const availableTickets = [
    'India',
    'France',
    'Bangalore',
    'Chennai'
    
  ];
  
  const travelRoute = findTravelRoute(availableTickets);
  console.log(travelRoute);
  