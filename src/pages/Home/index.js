import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { HabitItem } from "../../components/HabitItem";
import { HabitsContext } from "../../contexts/HabitsContext";
import "./index.css";

export function Home() {
    const { habits } = useContext(HabitsContext);

    const [showHabitDialogBox, setShowHabitDialogBox] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [showSingleHabit, setShowSingleHabit] = useState(false);
    const [singleHabit, setSingleHabit] = useState({});

    const [newHabit, setNewHabit] = useState({
        _id: uuid(),
        name: "",
        repeat: "Daily",
        goal: "1 Times",
        timeOfDay: "Morning",
        startDate: "Today",
    });

    const { editHabit } = useContext(HabitsContext);

    return (
        <div className="container">
            <div>
                <Link className="link link--secondary" to="/archive">
                    Go to Archive
                </Link>
            </div>
            <div className="habits">
                <button
                    className="habits__item"
                    onClick={(event) => {
                        console.log(event.target.value);

                        //reset new habit
                        setNewHabit({
                            _id: uuid(),
                            name: "",
                            repeat: "Daily",
                            goal: "1 Times",
                            timeOfDay: "Morning",
                            startDate: "Today",
                        });

                        setShowHabitDialogBox(true);

                        setIsEdit(false);
                    }}
                    value="Create Habit"
                >
                    Create Habit
                </button>

                {habits.map((habit) => (
                    <HabitItem
                        habit={habit}
                        setShowHabitDialogBox={setShowHabitDialogBox}
                        setNewHabit={setNewHabit}
                        setIsEdit={setIsEdit}
                        setShowSingleHabit={setShowSingleHabit}
                        setSingleHabit={setSingleHabit}
                    />
                ))}
            </div>

            <div
                className="modal"
                style={{ display: showHabitDialogBox ? "block" : "none" }}
            >
                <div className="modal__content">
                    <h2 className="modal__title">
                        {isEdit ? "Edit" : "Create"} Habit
                    </h2>
                    <div>
                        <label htmlFor="modal-name">Name</label>
                        <input
                            type="text"
                            id="modal-name"
                            name="modal__name"
                            onChange={(event) => {
                                setNewHabit((habit) => ({
                                    ...habit,
                                    name: event.target.value,
                                }));
                            }}
                            value={newHabit.name}
                        />
                    </div>
                    <div>
                        <div>
                            <p>Repeat</p>
                            <select
                                onChange={(event) => {
                                    setNewHabit((habit) => ({
                                        ...habit,
                                        repeat: event.target.value,
                                    }));
                                }}
                                value={newHabit.repeat}
                            >
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                            </select>
                        </div>
                        <div>
                            <p>Goal</p>
                            <select
                                onChange={(event) => {
                                    setNewHabit((habit) => ({
                                        ...habit,
                                        goal: event.target.value,
                                    }));
                                }}
                                value={newHabit.goal}
                            >
                                <option value="1 Times">1 Times</option>
                                <option value="2 Times">2 Times</option>
                            </select>
                        </div>
                        <div>
                            <p>Time of Day</p>
                            <select
                                onChange={(event) => {
                                    setNewHabit((habit) => ({
                                        ...habit,
                                        timeOfDay: event.target.value,
                                    }));
                                }}
                                value={newHabit.timeOfDay}
                            >
                                <option value="Any Time">Any Time</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                            </select>
                        </div>
                        <div>
                            <p>Start Date</p>
                            <select
                                onChange={(event) => {
                                    setNewHabit((habit) => ({
                                        ...habit,
                                        startDate: event.target.value,
                                    }));
                                }}
                                value={newHabit.startDate}
                            >
                                <option value="Today">Today</option>
                                <option value="Tomorrow">Tomorrow</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => setShowHabitDialogBox(false)}>
                            Discard
                        </button>
                        <button
                            onClick={() => {
                                editHabit(newHabit);

                                setShowHabitDialogBox(false);
                            }}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>

            <div
                className="modal"
                style={{ display: showSingleHabit ? "block" : "none" }}
            >
                <div className="modal__content">
                    <h2>{singleHabit.name}</h2>
                    <p>
                        <span>Repeat: </span> {singleHabit.repeat}
                    </p>
                    <p>
                        <span>Goal: </span> {singleHabit.goal}
                    </p>
                    <p>
                        <span>Time of Day: </span> {singleHabit.timeOfDay}
                    </p>
                    <p>
                        <span>Start Date: </span> {singleHabit.startDate}
                    </p>
                    <button onClick={() => setShowSingleHabit(false)}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
