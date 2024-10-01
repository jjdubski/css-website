type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = '' }: Props) => {
  return (
    <div className={`mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 ${className}`}>
      {children}
    </div>
  );
};

export default Container;