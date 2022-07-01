import Conversation from "../../components/Conversation";
import ProfileInfo from "../../components/Profile";

import './styles.scss';
import './main.scss';
import './aside.scss';

import UserProfileImg from "../../assets/4.png";
import IssueForm from "../../components/Form";

interface IssuesPageProps {

}

const IssuesPage: React.FC<IssuesPageProps> = () => {
    return (
        <div id='conversation-page'>
            <aside className="user-side-info">
                <div className='profile-head'>
                    <img src={UserProfileImg} width={210} height={210} />
                    <strong>Hello, Administrator</strong>
                    <div className='short-desc'>&nbsp;&nbsp;&nbsp;&nbsp;Please, fill in the form aside with the infos from your issue.</div>
                </div>
            </aside>
            <main>
                <IssueForm />
            </main>
        </div>
    );
}

export default IssuesPage;