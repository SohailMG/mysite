import React from "react";

function SkillBox({ id, Icon, name, level }) {
  const getLevelColor = (level) => {
    const l = Number(level.replace("%", ""));
    if (l <= 50) return "bg-orange-400";
    if (l > 50) return "bg-green-400";
  };
  return (
    <div className="p-2 w-36 flex flex-col items-center justify-center rounded-xl bg-[#1c2d5c]">
      {/* Progess */}
      <Icon className="text-3xl text-orange-100 " />
      <h1 class=" text-white pt-2">
        {name} <span class=" text-xs text-red-500">{level}</span>
      </h1>
      <div class="mt-2 h-2 relative w-32 rounded-full overflow-hidden">
        <div class=" w-full h-full bg-gray-200 absolute "></div>
        <div
          class={`${getLevelColor(level)} h-full  absolute`}
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBox;
