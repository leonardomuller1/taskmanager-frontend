import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = () => {
  const [task, setTask] = useState("");

  const notify = () => {
    toast.error("Erro ao adicionar tarefa! Precisa de uma descrição", {
      position: "bottom-right",
      autoClose: 1000,
    });
  };

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return notify();
      }

      await axios.post("http://localhost:8000/tasks", {
        description: task,
        isCompleted: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="add-task-container">
        <CustomInput
          label={"Adicionar tarefa..."}
          value={task}
          onChange={onChange}
        />
        <CustomButton onClick={handleTaskAddition}>
          {" "}
          {/* Corrigido aqui */}
          <FaPlus size={14} color="#FFFFFF" />
        </CustomButton>
      </div>{" "}
      <ToastContainer />
    </>
  );
};

export default AddTask;
