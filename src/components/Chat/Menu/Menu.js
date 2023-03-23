import React, { useState } from "react";
import Communication from "./Communication";

import Header from "./Header";
import Search from "./Search";

export default function Menu() {
  const [text, setText] = useState("");
  return (
    <div className="lg:w-[400px] md:w-[300px] sm:w-[250px] w-[250px] h-[100%] bg-white">
      <Header />
      <Search setText={setText} />
      <Communication text={text} />
    </div>
  );
}
