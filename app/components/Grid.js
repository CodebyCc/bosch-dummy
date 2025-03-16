function Grid({ children }) {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-2 md:items-start gap-10 mt-8">
      {children}
    </div>
  );
}

export default Grid;
