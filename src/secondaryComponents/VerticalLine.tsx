export default function VerticalLine() {
  return (
    <div className="relative min-h-full w-px lg:w-0.5 caret-transparent hidden lg:block mb-80 :)">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-blue-500 to-blue-600/20"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent blur-[2px] opacity-50"></div>
      
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-30"></div>
      <div className="absolute  left-1/2 -translate-x-1/2 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-t from-blue-500 to-transparent rounded-full opacity-30"></div>
    </div>
  );
}
