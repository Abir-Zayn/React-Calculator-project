export const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "ESC",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "=",
    "sqrt",
    "x^2",
  ];

  return (
    <div id="buttons-variable" className="grid md:grid-cols-3 gap-4">
      {buttonNames.map((buttonName) => (
        <button
          className={`w-20 h-20 p-2 rounded-full text-black text-xl font-medium text-center ${
            ["1", "4", "7", "+", "/", "x^2", "sqrt", "="].includes(buttonName)
              ? "bg-orange-400 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          onClick={() => onButtonClick(buttonName)}
          key={buttonName}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
