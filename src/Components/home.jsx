import React from "react";
import Search from "../Images/search-icon.svg";
import lamp from "../Images/lamp.png";
import cross from "../Images/cross.png";
import Textfield from "./textfield";
import List from "./list";

const home = () => {
  const data = [
    {
      title: "Start with the Basics:",
      description:
        "No matter what you’re looking for, begin by typing your query into the Google search box on the homepage or navigate to Google. Hit the search button, and Google will display relevant results based on your query.",
    },
    {
      title: "Rephrase Your Search:",
      description:
        " If you’re not getting the results you want, try rephrasing your search. Use different keywords or ask your question in a slightly different way. Google is smart and can often understand context, so feel free to experiment with variations.",
    },
    {
      title: "Filter Your Results:",
      description:
        "After searching, you can filter your results by selecting specific categories such as web pages, images, shopping, videos, and more. Look for these filters just below the search bar to narrow down your results.",
    },
  ];

  const resourceType=["e-Book","e-Jouranl","Video/Audio","Dissertations & Theses","Articles","Other Resource"];
  
  const accessType=["Open Access Content","Subscribed Content","Partially Subscribed Content","Abstract Only"];
  
  const language=["Afar","Afrikaans","Amharic","Korean","English","Japaese"];

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <div className="first px-12 py-2 col-span-3 md:col-span-2 ">
          <div className="top-section border-b-2 border-indigo-200 py-8">
            <h1 className="font-bold border-b-2 border-blue-950 inline">Write Context:</h1>
            <Textfield icon={cross} inputData={"Medical"} placeholder={""} />
            <Textfield
              icon={Search}
              inputData={"Search Articles,Journals,Videos etc"}
              placeholder={""}
            />
            <div className="relative">
            <h1 className="font-bold my-4">Published In:</h1>
            <img src={Search} className="absolute md:right-[142px] right-[109px] top-[42px]" alt="" />
              <input
                type="text"
                value=""
                className="h-10  order-1 md:order-2 border-2 w-[80%] border-zinc-400 px-4  rounded-3xl ml-2"
                placeholder=""
              />
            </div>
            
          </div>

          <div className="middle border-b-2 border-indigo-200 py-4">
            <div className="heading py-5">
              <h1 className="font-bold border-b-2 border-blue-950 inline">
                Publication Dates:
              </h1>
            </div>
            <div className="md:flex my-3 gap-3">
              <div className="option-1 w-full items-center flex">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  class="font-semibold mx-2 text-[17px]  text-gray-500"
                  for="inlineRadio2"
                >
                  Search Through All Dates
                </label>
              </div>
              <div className="my-4 md:my-0 option-1 w-full items-center flex">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  class="font-semibold mx-2 text-sm[16px] text-gray-500"
                  for="inlineRadio2"
                >
                  Last Ranges
                </label>
                <select
                name=""
                id=""
                className="border-2 mx-2 border-zinc-300 text-[16px] rounded-[30px] px-5 py-2.5 w-full"
              >
                <option value="">Last 7 Days</option>
              </select>
              </div>
             
            </div>
            <div className="mt-8 custom">
              <h1 className=" font-bold text-xl">Select Custom Dates</h1>
              <div className="flex gap-5">
                <div className="grid w-72">
                  <label className="font-bold text-sm" htmlFor="">
                    From :
                  </label>
                  <input
                    className="border-2 mx-2 my-5 border-zinc-300 text-[16px] rounded-[30px] px-5 py-2.5 w-full"
                    type="date"
                    name=""
                    id=""
                  />
                </div>
                <div className="grid w-72">
                  <label className="font-bold text-sm" htmlFor="">
                    To :
                  </label>
                  <input
                    className="border-2 mx-2 my-5 border-zinc-300 text-[16px] rounded-[30px] px-5 py-2.5 w-full"
                    type="date"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="last py-8">
            <h1 className="font-bold border-b-2 border-blue-950 inline">Select Types</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <List Heading={"Resource Type"} items={resourceType} />
              <List Heading={"Access Type"} items={accessType} />
              <List Heading={"Language"} items={language} />
            </div>
          </div>
        </div>
        <div className="hidden md:inline left mt-4 py-2 px-8">
          <div className="section-content border-2 overflow-hidden border-zinc-300 rounded-xl">
            <div className="heading flex justify-between bg-zinc-100 text-xl px-4 py-4">
              <h1 className="font-bold">How To Search</h1>
              <img src={lamp} alt="" />
            </div>
            {data.map((item, index) => (
              <div className="main px-4 py-4" key={index}>
                <h1 className="title font-bold">{item.title}</h1>
                <p className="text-[14px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
