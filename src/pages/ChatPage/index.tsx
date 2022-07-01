import Conversation from "../../components/Conversation";
import ProfileInfo from "../../components/Profile";

import './styles.scss';
import './main.scss';
import './aside.scss';

import BotProfileImg from "../../assets/2.png";

interface ChatPageProps {

}

const ChatPage: React.FC<ChatPageProps> = () => {
    return (
        <div id='conversation-page'>
            <aside className="bot-side-info">
                <div className='profile-head'>
                    <img src={BotProfileImg} width={240} height={240} />
                    <strong>Hello, I'm your Bot</strong>
                    <div className='short-desc'>What can I help you with?</div>
                </div>
                <ProfileInfo />
            </aside>
            <main>
                <Conversation />
            </main>
        </div>
    );
}

export default ChatPage;