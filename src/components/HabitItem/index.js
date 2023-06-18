import { useContext } from "react";
import { HabitsContext } from "../../contexts/HabitsContext";

export function HabitItem({
    habit,
    setShowHabitDialogBox,
    setNewHabit,
    setIsEdit,
    setShowSingleHabit,
    setSingleHabit,
}) {
    const { archiveHabit, deleteHabit } = useContext(HabitsContext);
    return (
        <div>
            <button
                className="habits__item"
                onClick={() => {
                    setShowSingleHabit(true);
                    setSingleHabit(habit);
                }}
                value={habit.name}
            >
                {habit.name}
            </button>
            <div>
                <button
                    onClick={() => {
                        setShowHabitDialogBox(true);
                        setNewHabit(habit);
                        setIsEdit(true);
                    }}
                >
                    Edit
                </button>
                <button onClick={() => archiveHabit(habit)}>Archive</button>
                <button onClick={() => deleteHabit(habit)}>Delete</button>
            </div>
        </div>
    );
}
