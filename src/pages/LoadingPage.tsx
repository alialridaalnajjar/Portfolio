import Cube from "@/secondaryComponents/Cube";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  const nav = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      nav("/MainPage");
    }, 4900);
  }, [nav]);

  return (
    <div className="bg-black h-auto min-h-screen">
      <Cube />
    </div>
  );
}
