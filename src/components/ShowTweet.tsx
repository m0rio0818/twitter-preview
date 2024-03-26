type tweetdetail = {
    name: string;
    id: string;
    detail: string;
    time: Date;
};

type propsType = {
    tweetLists: tweetdetail[];
};

const ShowTweet: React.FC<propsType> = ({ tweetLists }) => {
    console.log("tweetALL => ", tweetLists);
    return (
        <div>
            {tweetLists.map((tweet) => {
                return (
                <div key={tweet.id}> 
                    <p>{tweet.name}</p>
                    <p>{tweet.id}</p>
                    <p>{tweet.detail}</p>
                </div>
                )
            })}
        </div>
    );
};

export default ShowTweet;
