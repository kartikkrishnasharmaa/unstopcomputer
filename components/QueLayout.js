import QueSidebar from "./QueSidebar";
const QueLayout = ({ children }) => {
    return (
        <div>
            <QueSidebar />
            <div>
                {children}
            </div>

        </div>
    );
};

export default QueLayout;