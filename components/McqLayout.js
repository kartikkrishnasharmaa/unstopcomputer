import McqSidebar from "./McqSidebar";
const McqLayout = ({ children }) => {
    return (
        <div>
            <McqSidebar />
            <div>
                {children}
            </div>

        </div>
    );
};

export default McqLayout;