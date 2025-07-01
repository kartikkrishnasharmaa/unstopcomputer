import Examplesidebar from "./Examplesidebar";
const Examplelayout = ({ children }) => {
    return (
        <div>
            <Examplesidebar />
            <div>
                {children}
            </div>

        </div>
    );
};

export default Examplelayout;