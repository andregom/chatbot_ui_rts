import React, { useEffect, useState } from "react";
import fetchFakeMessages from '../../utils/fetchFakeMessages';

import './styles.scss';

import sendIcon from "../../assets/3.png";

interface ConversationProps {

}

interface IMessage {
    sender?: string;
    source?: number;
    message: string;
    date?: string
}

const Conversation: React.FC<ConversationProps> = () => {

    const [messages, setMessages] = useState<IMessage[]>([]);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        async function loadMesages() {
            await fetchFakeMessages().then(data => {
                setMessages(data);
            });
        }
        loadMesages();
    }, []);

    async function handleSubmit(e: React.FormEvent): Promise<void> {
        e.preventDefault();

        await handleSendMessage({
            message
        });

        setMessage('');
    }

    async function handleSendMessage(data: { message: string }) {

        /* const response = await api.post('/messages/{id}', data) */

        setMessages([...messages, data]);
    }

    return (
        <div>
            <div className='messages'>
                <ul>
                    {
                        messages.map(message => (
                            <div>
                                <div className='message-container'
                                    key={Object(message)._id}
                                    style={{ textAlign: `${message.source ? 'left' : 'right'}` }}
                                >
                                    <div className='message-content'
                                    >{message.message}</div>
                                </div>
                            </div>
                        ))
                    }
                </ul>
            </div>
            <form
                className='message-sender-form'
                onSubmit={handleSubmit}
            >
                <div className='message-sender-container'>
                    <input
                        name='message-sender'
                        id='message-sender'
                        placeholder='Em que posso ajudá-lo?'
                        value={message}
                        required={true}
                        onChange={e => setMessage(e.target.value)}
                    >
                    </input>
                    <button>
                        <img src={sendIcon} alt="send message button" width={30} height={23} />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Conversation;