import React from "react";
import ApiFetch from "../api/ApiFetch";
import CustomHookData from "../hooks/customHook/CustomHookData";
import UseState from "../hooks/UseState/UseState";
import UseReducer from "../hooks/UseReducer/Usereducer";
import ToDoList from "../hooks/UseReducer/ToDoList";
import UseOptimisticPage from "../hooks/UseOptimistic/UseOptimisticPage";
import ContextExample from "../context/ContextExample";
import UseMemo from "../hooks/UseMemo/UseMemo";
import UseCallback from "../hooks/UseCallback/UseCallback";

const LayoutPage = () => {
  return (
    <div className="py-10 max-w-7xl m-auto">
      <div className="flex justify-center items-center  gap-5">
        {/* api data fetch */}
        {/* <ApiFetch /> */}

        {/* hooks */}
        {/* <CustomHookData /> */}
        {/* <UseState /> */}
        {/* <UseReducer /> */}
        {/* <ToDoList /> */}
        {/* <UseOptimisticPage /> */}
        {/* <ContextExample /> */}
        {/* <UseMemo /> */}
        <UseCallback />
      </div>
    </div>
  );
};

export default LayoutPage;
