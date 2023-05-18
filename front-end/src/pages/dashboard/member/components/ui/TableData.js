const TableData = ({ className, children }) => {
  return <td className={`${className} border px-4 py-2`}>{children}</td>;
};

export default TableData;
