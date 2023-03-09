import { Entity, Column, PrimaryColumn, createConnection, Connection } from 'typeorm';
// test
@Entity()
class TableAvailability {
  @PrimaryColumn()
  TableID!: number;

  @Column({ enum: ['Silver', 'Gold', 'Platinum'] })
  Status!: 'Silver' | 'Gold' | 'Platinum';

  @Column()
  Availability!: boolean;
}

async function getTableStatus(TableID: number): Promise<TableAvailability | null> {
  const connection: Connection = await createConnection({
    type: 'mysql',
    host: 'londoncomedylunch.database.windows.net',
    port: 1433,
    username: 'Inconnection_LCL',
    password: 'Golfer70!',
    database: 'Seats',
    entities: [TableAvailability],
  });

  const tableAvailabilityRepository = connection.getRepository(TableAvailability);
  const table = await tableAvailabilityRepository.findOne(TableID);

  await connection.close();

  return table || null;
}

// Example usage:
getTableStatus(1).then((table) => {
  if (table) {
    const div = document.getElementById('table-1');
    if (table.Availability) {
      div.style.backgroundColor = 'green'; // Table is available
    } else {
      div.style.backgroundColor = 'red'; // Table is not available
    }
  } else {
    console.log('Table not found');
  }
});
