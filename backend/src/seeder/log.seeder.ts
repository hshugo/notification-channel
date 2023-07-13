import { AppDataSource } from "../data-source";
import { Log } from "../entity/log.entity";

const logSeeder = async () => {
    try {
        await AppDataSource.initialize();

        const logRepository = AppDataSource.getRepository(Log);

        const logs = [
            {
                description: "Datetime example - FullName User - Category - Type Notification - Type notification and message - Satus sent",
            }
        ];

        await logRepository.save(logs);
    }

    catch (error) {
        console.log(error);
    }

    finally {
        process.exit(0);
    }
};

logSeeder();