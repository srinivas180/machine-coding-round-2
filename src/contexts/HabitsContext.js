import { createContext, useState } from "react";

import { habitsData } from "../db/habits";

export const HabitsContext = createContext();

export function HabitsProvider({ children }) {
    const [habits, setHabits] = useState(habitsData);
    const [archiveHabits, setArchiveHabits] = useState([]);

    const addHabit = (habit) => {
        setHabits((habits) => [...habits, habit]);
    };

    const deleteHabit = (habit) => {
        setHabits((habits) => habits.filter((item) => item._id != habit._id));
    };

    const archiveHabit = (habit) => {
        deleteHabit(habit);
        setArchiveHabits((habits) => [...habits, habit]);
    };

    const editHabit = (habit) => {
        deleteHabit(habit);
        addHabit(habit);
    };

    return (
        <HabitsContext.Provider
            value={{
                habits,
                archiveHabits,
                addHabit,
                editHabit,
                deleteHabit,
                archiveHabit,
            }}
        >
            {children}
        </HabitsContext.Provider>
    );
}
