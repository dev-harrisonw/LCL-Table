import { createConnection, Connection } from 'typeorm';

interface User {
  id: number;
  name: string;
  email: string;
}

async function run(): Promise<void> {
  let connection: Connection;

  try {
    connection = await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'db_user',
      password: 'db_password',
      database: 'db_name',
      entities: [User],
      synchronize: true,
    });

    const userRepository = connection.getRepository(User);
    const users = await userRepository.find();
    console.log(users);
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

run();



