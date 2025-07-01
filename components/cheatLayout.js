import Cheatsidebar from "./cheatSidebar";
const Examplelayout = ({ children }) => {
    return (
        <div>
            <Cheatsidebar />
            <div>
                {children}
            </div>

        </div>
    );
};

export default Examplelayout;