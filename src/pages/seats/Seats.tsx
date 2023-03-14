import { useState, useEffect } from 'react';
import { getSeatStatus } from './database';

interface SeatProps {
  id: number;
}

function Seat({ id }: SeatProps) {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    getSeatStatus(id).then((seat) => {
      if (seat) {
        setIsAvailable(seat.isAvailable);
      }
    });
  }, [id]);

  return (
    <div style={{ backgroundColor: isAvailable ? 'green' : 'red' }}>
      Seat {id}
    </div>
  );
}

function Seats() {
  const seatIds = [1, 2, 3, 4, 5];

  return (
    <div>
      {seatIds.map((id) => (
        <Seat key={id} id={id} />
      ))}
    </div>
  );
}

export default Seats;
