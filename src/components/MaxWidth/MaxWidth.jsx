const MaxWidth = ({ customClass = "", maxWidth = "", children }) => {
  return (
    <div className={`max-w-[1100px] m-auto ${customClass}, ${maxWidth}`}>
      {children}
    </div>
  );
};

export default MaxWidth;
