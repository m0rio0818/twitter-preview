type tweetType = {
    name: string;
    id: string;
    detail: string;
};

type propsType = {
    // setTweet: (value: string) => void;
    onClick: () => void;
};

const Btn: React.FC<propsType> = ({ onClick }) => {
    // const createTweet = (
    //     // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    // ) => {
    //     setTweet();
    // };

    return (
        <>
            <button
                type="button"
                onClick={onClick}
                className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none
                focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 "
            >
                POST
            </button>
        </>
    );
};

export default Btn;
