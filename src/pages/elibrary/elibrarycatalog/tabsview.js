import React from "react";
import { Dropdown } from "primereact/dropdown";

export default function Index(props) {
  
  return (
    <>
      <div className="mb-[24px] xl:mb-[1.250vw]">
        <div className="flex justify-between items-center gap-2">
          <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal leading-none">
            <span className="text-[16px] xl:text-[0.833vw] font-semibold">
            {props.selectedCategory !== 0 ? props.filteredDoccumentList && props.filteredDoccumentList.length : props.totalRecords}
            </span>{" "}
            Files
          </div>
          <div className="flex items-center gap-[16px] xl:gap-[0.833vw]">
            <div className="custom_selectdropdown flex items-center bg-[#fff] border border-[#BECDE3] rounded-lg py-[8px] xl:py-[0.521vw] px-[10px] xl:px-[0.625vw] xl:text-[#4B586E] text-[0.729vw]">
              <span className="mr-1">Sort by:</span>
              <Dropdown
                value={props.selectedCategory}
                onChange={(e) => props.handleCategorySorting(e)}
                options={props.Category}
                optionLabel="label"
                placeholder="Categories"
                className=""
              />
            </div>

            <div
              onClick={
                () => {
                  props.setView("Row");
                  props.setView("Row")
                }
              }
              className={`${
                props.view === "Row"
                  ? "bg-[#1F2A37]"
                  : "border-[#BECDE3] bg-[#FFFFFF]"
              } flex items-center justify-center rounded-[8px] xl:rounded-[0.417vw] cursor-pointer w-[48px] xl:w-[2.500vw] h-[48px] xl:h-[2.500vw]`}
            >
              <i
                className={`${
                  props.view === "Row" ? "text-[#fff]" : "text-[#4B586E]"
                } austin-rowview text-[24px] xl:text-[1.25vw]`}
              ></i>
            </div>
            <div
              onClick={
                () => {
                  props.setView("Grid");
                  props.setView("Grid")
                }
              }
              className={`${
                props.view === "Grid"
                  ? "bg-[#1F2A37]"
                  : "border-[#BECDE3] bg-[#FFFFFF]"
              } flex items-center justify-center rounded-[8px] xl:rounded-[0.417vw] cursor-pointer w-[48px] xl:w-[2.500vw] h-[48px] xl:h-[2.500vw]`}
            >
              <i
                className={`${
                  props.view === "Grid" ? "text-[#fff]" : "text-[#4B586E]"
                } austin-grid text-[24px] xl:text-[1.25vw]`}
              ></i>
            </div>
            <div
              onClick={
                () => {
                  props.setView("List");
                  props.setView("List")
                }
              }
              className={`${
                props.view === "List"
                  ? "bg-[#1F2A37]"
                  : "border-[#BECDE3] bg-[#FFFFFF]"
              } flex items-center justify-center rounded-[8px] xl:rounded-[0.417vw] cursor-pointer w-[48px] xl:w-[2.500vw] h-[48px] xl:h-[2.500vw]`}
            >
              <i
                className={`${
                  props.view === "List" ? "text-[#fff]" : "text-[#4B586E]"
                } austin-menu-drawer text-[24px] xl:text-[1.250vw]`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
