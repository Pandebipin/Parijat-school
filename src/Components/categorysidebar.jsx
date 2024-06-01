import React, { useState } from "react";
import Teacherbio from "./Teacherbio";
import Allteacherbio from "./Allteacherbio";

const CatogerySidebar = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <div className="flex gap-2 min-h-[100vh]">
        {state ? <Teacherbio /> : <Allteacherbio />}
      </div>
    </>
  );
};

export default CatogerySidebar;
