import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";

export default function Index(props) {
  const [ingredient, setIngredient] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="border-[#E5E7EB] bg-[#FFFFFF] rounded-[16px] xl:rounded-[0.833vw] tilesShadow h-full">
        <div className="p-[24px] xl:p-[1.25vw]">
          <div className="text-[18px] xl:text-[0.938vw] text-[#374151] font-medium mb-[24px] xl:mb-[1.25vw]">
            Advanced Search
          </div>
          <div className="p-inputgroup custom_search mb-[38px] xl:mb-[1.979vw]">
            <InputText placeholder="Search" value={props.searchValue}
              onChange={(e) => props.handleSearch(e)} />
            <span className="p-inputgroup-addon">
              <i className="austin-search"></i>
            </span>
          </div>
          <div className="flex items-center gap-2 mb-[24px] xl:mb-[1.25vw]">
            <div
              onClick={() => props.handleSearchType('all')}
              className={`text-[#4B586E] border border-[#E5E7EB] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer ${props?.selectedTypes?.length === props?.searchTypes?.length ? 'bg-[#1F2A37] text-[#fff]' : 'bg-[#FFFFFF59] text-[#4B586E]'
                }`}
            >
              All
            </div>
            
            {props.searchTypes && props.searchTypes.map((searchType) => (
              <div
                key={searchType.type}
                onClick={() => props.handleSearchType(searchType.type)}
                className={`text-[#4B586E] border border-[#E5E7EB] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer ${props.selectedTypes.includes(searchType.type)
                    ? 'bg-[#1F2A37] text-[#fff]'
                    : 'bg-[#FFFFFF59] text-[#4B586E]'
                  }`}
              >
                {searchType.label}
              </div>
            ))}
          </div>
          <div className="customAccordion">
            <Accordion activeIndex={[0]} multiple={true}>
              <AccordionTab header="Category" >
                {props.categoryDropdown && props.categoryDropdown?.map((elm, index) => {
                  return (
                    <div key={index} className="flex items-center py-[8px]">
                      <Checkbox
                        onChange={() => props.handleCatCheckbox(elm.el_category_id)}
                        checked={props.selectedCategories?.includes(
                          elm.el_category_id
                        )}
                        className="custumCheckbox"
                      ></Checkbox>
                      <label
                        htmlFor={`ingredient${index}`}
                        className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                      >
                        {elm.el_category} {elm.documentCount > 0 ? '(' + elm.documentCount + ')' : null}
                      </label>
                    </div>
                  );
                })}

                {/* <div>
                  <div className="flex items-center py-[8px]">
                    <Link href={""} className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-medium">
                      <i className="austin-three-dots-rectangle text-[18px] xl:text-[0.938vw] mr-2"></i>
                      Show more
                    </Link>
                  </div>
                </div> */}
              </AccordionTab>
              <AccordionTab header="Format">
                {props.typeDropdown && props?.typeDropdown?.map((elm, index) => {
                  return (
                    <div className="m-0" key={index}>
                      <div className="flex items-center py-[8px]">
                        <Checkbox
                          onChange={() => props.handleFormatCheckbox(elm)}
                          checked={props.selectedFormat?.includes(elm)}
                          className="custumCheckbox"
                        ></Checkbox>
                        <label
                          htmlFor={`ingredient${index}`}
                          className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                        >
                          {elm}
                        </label>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="flex items-center py-[8px]">
                  <Link href={""} className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-medium">
                    <i className="austin-three-dots-rectangle text-[18px] xl:text-[0.938vw] mr-2"></i>
                    Show more
                  </Link>
                </div> */}
              </AccordionTab>
              <AccordionTab header="KeyWords">
                <div className="m-0 mt-[8px] mb-[24px] xl:mb-[1.25vw]">
                  <div className="keywordSearch">
                    <span className="p-input-icon-left w-full">
                      <i className="autinisd-search" />
                      <InputText placeholder="Type in here" className="w-full" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-[24px] xl:mb-[1.25vw]">
                  <div className="flex items-center custRadio">
                    <RadioButton
                      inputId="ingredient1"
                      name="pizza"
                      value="Cheese"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "Cheese"}
                    />
                    <label
                      htmlFor="ingredient1"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Any Word
                    </label>
                  </div>

                  <div className="flex items-center custRadio">
                    <RadioButton
                      inputId="ingredient2"
                      name="pizza"
                      value="kjjkj"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "kjjkj"}
                    />
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      All Words
                    </label>
                  </div>

                  <div className="flex items-center custRadio">
                    <RadioButton
                      inputId="ingredient3"
                      name="pizza"
                      value="pnnir"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "pnnir"}
                    />
                    <label
                      htmlFor="ingredient3"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Exact Phase
                    </label>
                  </div>
                </div>
                {/* <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient1"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      PDF
                    </label>
                  </div>
                </div> */}
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Image
                    </label>
                  </div>
                </div>
                {/* <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      DOC / DOCX
                    </label>
                  </div>
                </div> */}
                {/* <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      XLS/ XLSX
                    </label>
                  </div>
                </div> */}
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      ZIP (Compressed files)
                    </label>
                  </div>
                </div>
                {/* <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      CSV
                    </label>
                  </div>
                </div> */}
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
