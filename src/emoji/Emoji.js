import Picker from 'emoji-picker-react';
import './Emoji.scss';

const Emoji = (props) => {

    const onEmojiClick = (event, emojiObject) => {
        props.onAddEmoji(emojiObject);
    };

    return (
        <div className="emoji" hidden={props.hidden}>
            <Picker pickerStyle={{
                'position': 'absolute',
                'left': '490px',
                'top': '50px'
            }} onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default Emoji;