import Btn from "./Btn";
import InputComponent from "./InputComponent";
import TextArea from "./TextArea";
import ShowTweet from "./ShowTweet";
import { useState } from "react";

type tweetType = {
    name: string;
    id: string;
    detail: string;
    time: Date;
};

const Form = () => {
    const [userName, setUserName] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const [tweetDetail, setTweetDetail] = useState<string>("");
    const [tweetList, setTweetTimeline] = useState<tweetType[]>([]);

    const setTweet = () => {
        if (userName == "" || userId == "" || tweetDetail == "") {
            window.alert("tweetが全て入力できてません");
        } else {
            const tweets = {
                name: userName,
                id: userId,
                detail: tweetDetail,
                time: new Date(),
            };

            setUserName("");
            setUserId("");
            setTweetDetail("");
            setTweetTimeline([...tweetList, tweets]);
        }
    };

    console.log(tweetList);

    return (
        <div>
            <div className="flex flex-col">
                <div className="flex py-1">
                    <InputComponent setValue={setUserName} keys={"name"} />
                    <InputComponent setValue={setUserId} keys={"id"} />
                </div>
                <TextArea setValue={setTweetDetail} />
            </div>
            <div className="flex justify-center py-3">
                <Btn onClick={setTweet} />
            </div>
            <div>
                <ShowTweet tweetLists={tweetList} />
            </div>
        </div>
    );
};

export default Form;
