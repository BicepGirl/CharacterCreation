import * as React from "react";

const ButtonBG = (setShow,show) => {

  return (
      <button
          className=" bg-slate-300 outline outline-1 m-2 italic tracking-widest uppercase rounded-xl hover:bg-slate-500 p-2 text-white"
          type="button"
          onClick={() => setShow(!show)}
      >
        Change background color
      </button>
  );
}

export default ButtonBG