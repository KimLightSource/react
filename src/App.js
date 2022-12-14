import React, {useState, useCallback} from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
    console.log('App Component')
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const handleClick = useCallback((id) => {
        let newTodoData = todoData.filter(data => data.id !== id)
        console.log('newTodoData', newTodoData)
        setTodoData(newTodoData)
    }, [todoData])

    const handleSubmit = (e) => {
        e.preventDefault();

        //새로운 할 일 데이터
        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        };

        //원래 있던 할 일에 새로운 할 일 더해주기
        setTodoData((prev) => [...prev, newTodo]);
        setValue("");
    }


    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1>할 일 목록</h1>
                </div>

                <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>

                <Form handleSubmit={handleSubmit} value={value} setValue={setValue}> </Form>
            </div>
        </div>
    );
    }
