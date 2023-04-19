import { useState } from "react"
import Sidemenu from "./Sidemenu"
import Tutorial from "./module/Tutorial";
import Assignment from "./module/Assignment";
import Discussion from "./module/Discussion";
import Member from "./module/Member";
import Notes from "./module/Notes";
import About from "./module/About";

const Classroom = () => {
    const [module, setModule] = useState("b");
    return (
        <>
        <div className="Classroom">
            <div className="left_Classroom">
                <Sidemenu />
            </div>
            <div className="right_Classroom">
                {module == "a" && <Tutorial /> ||
                module === "b" && <Assignment /> ||
                module ==="c" && <Discussion /> ||
                module ==="d" && <Member /> ||
                module ==="e" && <Notes /> ||
                module ==="f" && <About />
                }
            </div>
        </div>
        </>
    )
}

export default Classroom