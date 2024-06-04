import Navbar from "../components/navBar"

export default function LMain({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {children}
            </div>

        </div>
    )
}