import { Channel } from "../entity/channel.entity";
import { AppDataSource } from "../data-source";

const channelSeeder = async () => {
    try {
        await AppDataSource.initialize();
        
        const channelRepository = AppDataSource.getRepository(Channel);

        const channels = [
            { name: "SMS" },
            { name: "E-Mail" },
            { name: "Push Notification" }
        ];

        await channelRepository.insert(channels);

    }
    catch (error) {
        console.log(error);
    }

    finally {
        process.exit(0);
    }
};

channelSeeder();