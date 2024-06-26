import HeaderShared from "../shared/header";

interface IProps {
  children: React.ReactElement;
}

const LayoutPage = ({ children }: IProps) => {
  return (
    <div>
      <HeaderShared />
      {children}
    </div>
  );
};

export default LayoutPage;
