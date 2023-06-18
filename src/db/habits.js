import { v4 as uuid } from "uuid";

export const habitsData = [
    {
        _id: uuid(),
        name: "Drink Water",
        repeat: "Daily",
        goal: "2 Times",
        timeOfDay: "Morning",
        startDate: "Today",
    },
    {
        _id: uuid(),
        name: "Meditate",
        repeat: "Daily",
        goal: "1 Times",
        timeOfDay: "Morning",
        startDate: "Tomorrow",
    },
];
