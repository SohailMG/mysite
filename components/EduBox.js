import React from "react";

function EduBox({ from, to, grade, topics, name, type }) {
  return (
    <div class="flex items-center relative">
      <div class="hidden md:block w-20">
        <div class="font-bold italic text-xs text-gray-600">
          {from.split("-")[1]}/{to.split("-")[1]}
        </div>
        <div class="md:flex space-x-1 text-xs text-gray-600">
          <div>{from.split("-")[0]}</div>
          <div>-</div>
          <div>{to.split("-")[0]}</div>
        </div>
      </div>

      <div class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
        <i class="fas fa-circle -top-1 -ml-2 absolute"></i>
      </div>

      <div class="ml-10">
        <div class="font-bold text-orange-200">{name}</div>
        <div class="italic md:mb-4 text-gray-600">
          {type} |{" "}
          <span class="text-orange-400 font-bold text-xs">{grade}</span>
        </div>
        <div class="mb-4 mt-2 md:hidden">
          <div class="font-bold text-gray-600">
            {from.split("-")[1]}/{to.split("-")[1]}
          </div>
          <div class="text-xs text-gray-600">
            {from.split("-")[0]} - {to.split("-")[0]}
          </div>
        </div>
        <div class="mb-10 text-gray-400">
          {topics.map(({ topic }) => (
            <li>{topic}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EduBox;
