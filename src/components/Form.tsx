import Btn from "./Btn";
import InputComponent from "./InputComponent";
import TextArea from "./TextArea";
import { useState } from "react";

const Form = () => {
    const [userName, setUserName] = useState<string>("");
    const [userId, setUserId] = useState<string>("");

    return (
        <div>
            <InputComponent name={userName} key={"name"} />
            <InputComponent name={userId} key={"id"} />
            <TextArea />
            <div className="flex justify-center py-3">
                <Btn />
            </div>
        </div>
    );
};

export default Form;
