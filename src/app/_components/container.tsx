type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-auto lg:px-80">{children}</div>;
};

export default Container;
