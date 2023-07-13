import { Subscriber } from "../entity/subscriber.entity";
import { AppDataSource } from "../data-source";

const subscriberSeeder = async () => {
    try {
        await AppDataSource.initialize();
        
        const subscriberRepository = AppDataSource.getRepository(Subscriber);
            
        const subscribers = [
            {
                name: "Hugo Silva",
                email: "hshugo@gmail.com",
                phone: 12345678,
                categories: [
                    { id: 1 },
                    { id: 2 },
                ],
                channels: [
                    { id: 3 },
                ]
            },
            {
                name: "Enrique Lopez",
                email: "enrique@gmail.com",
                phone: 87654321,
                categories: [
                    { id: 2 },
                ],
                channels: [
                    { id: 1 },
                    { id: 3 },
                ]
            },
            {
                name: "Pedro Gomez",
                email: "pedro@gmail.com",
                phone: 15161817,
                categories: [
                    { id: 1 },
                    { id: 3 },
                ],
                channels: [
                    { id: 2 },
                    { id: 3 },
                ]
            }
        ];

        await subscriberRepository.save(subscribers);
        

    }
    catch (error) {
        console.log(error);
    }

};

subscriberSeeder();