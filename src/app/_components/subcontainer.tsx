type Props = {
    children?: React.ReactNode;
  };
  
const Subcontainer = ({ children }: Props) => {
return <div className="mt-8 bg-stone-100">{children}</div>;
};
  
export default Subcontainer;