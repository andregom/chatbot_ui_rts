import React, { useEffect, useState } from "react";
import fetchFakeMessages from '../../utils/fetchFakeMessages';

import './styles.scss';

import sendIcon from "../../assets/3.png";

interface IssueFormProps {

}

interface IMessage {
    sender?: string;
    source?: number;
    message: string;
    date?: string
}

const IssueForm: React.FC<IssueFormProps> = () => {

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
            <form
                className='message-sender-form'
                onSubmit={handleSubmit}
            >
                <div className='form-container'>
                    Qual o nome da sua empresa
                    <input
                        name='message-sender'
                        id='message-sender'
                        placeholder='Preencha aqui a informação descrita acima'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    >
                    </input>

                    Qual seu tipo de empresa
                    <input
                        name='message-sender'
                        id='message-sender'
                        placeholder='Preencha aqui a informação descrita acima'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    >
                    </input>

                    Em qual ramo ela atua?
                    <input
                        name='message-sender'
                        id='message-sender'
                        placeholder='Preencha aqui a informação descrita acima'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    >
                    </input>

                    Que intenção deseja cadastrar?
                    <input
                        name='message-sender'
                        id='message-sender'
                        placeholder='Preencha aqui a informação descrita acima'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    >
                    </input>
                    <button>
                        submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default IssueForm;