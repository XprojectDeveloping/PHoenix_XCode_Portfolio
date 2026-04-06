const MaxWidth = ({ customClass = "", children }) => {
  return (
    <div className={`max-w-[1100px] m-auto ${customClass}`}>{children}</div>
  );
};

export default MaxWidth;
