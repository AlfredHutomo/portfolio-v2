import ThemeSwitcher from "./ThemeSwitcher";

const ControlBar = () => {
  return (
    <nav className="flex p-[30px] justify-between sm:flex-col sm:w-[100px] sm:px-0 sm:py-[40px] sm:items-center col-span-1 text-jeans dark:text-water text-xl">
      <p>7</p>
      <ThemeSwitcher />
      <div className="flex flex-row sm:flex-col items-center gap-0">
        <p>1</p>
        <p>9</p>
        <p>9</p>
        <p>9</p>
      </div>
    </nav>
  );
};

export default ControlBar;
