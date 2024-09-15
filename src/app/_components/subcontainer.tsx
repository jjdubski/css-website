type Props = {
    children?: React.ReactNode;
  };
  
const Subcontainer = ({ children }: Props) => {
return <div className="mt-8">{children}</div>;
};
  
export default Subcontainer;