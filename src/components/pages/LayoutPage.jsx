import React from "react";
import ApiFetch from "../api/ApiFetch";
import CustomHookData from "../customHook/CustomHookData";
import UseState from "../UseState/UseState";
import UseReducer from "../UseReducer/Usereducer";
import ToDoList from "../UseReducer/ToDoList";
import UseOptimisticPage from "../UseOptimistic/UseOptimisticPage";
import ContextExample from "../context/ContextExample";

const LayoutPage = () => {
  return (
    <div className="py-10 max-w-7xl m-auto">
      <div className="flex justify-center items-center  gap-5">
        {/* api data fetch */}
        <ApiFetch />

        {/* hooks */}
        {/* <CustomHookData /> */}
        {/* <UseState /> */}
        {/* <UseReducer /> */}
        {/* <ToDoList /> */}
        {/* <UseOptimisticPage /> */}
        {/* <ContextExample /> */}
      </div>
    </div>
  );
};

export default LayoutPage;
