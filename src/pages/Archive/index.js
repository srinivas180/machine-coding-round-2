import { useContext } from "react";
import { Link } from "react-router-dom";
import { HabitsContext } from "../../contexts/HabitsContext";

export function Archive() {
    const { archiveHabits } = useContext(HabitsContext);

    return (
        <div className="container">
            <div>
                <Link className="link link--secondary" to="/">
                    Go to Home
                </Link>
            </div>
            <div className="habits">
                {archiveHabits.map((habit) => (
                    <button className="habits__item" value={habit.name}>
                        {habit.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
