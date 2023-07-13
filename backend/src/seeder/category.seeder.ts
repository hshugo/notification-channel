import { Category } from "../entity/category.entity";
import { AppDataSource } from "../data-source";

const categorySeeder = async () => {
    try {
        await AppDataSource.initialize();
        
        const categoryRepository = AppDataSource.getRepository(Category);

        const categories = [
            { name: "Sports" },
            { name: "Finance" },
            { name: "Movies" },
            { name: "Countries(inactive)", active: false }
        ];

        await categoryRepository.insert(categories);

    }
    catch (error) {
        console.log(error);
    }

    finally {
        process.exit(0);
    }
};

categorySeeder();