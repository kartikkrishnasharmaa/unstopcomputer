import HtmlSidebar from "./HtmlSidebar";

const HtmlLayout = ({ children }) => {
    return (
        <div>
            <div>
                <HtmlSidebar />
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HtmlLayout;