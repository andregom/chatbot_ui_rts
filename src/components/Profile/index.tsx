import './styles.scss';

interface ProfileProps {

}

const Profile: React.FC<ProfileProps> = () => {
    return (
        <>
            <div className="info-block">
                <div className='small-list-title'>
                    I am here to help you with...
                </div>
                <ul>

                </ul>
            </div>

            <div className="info-block">
                <div className='small-list-title'>
                    My specialities are...
                </div>
                <ul>

                </ul>
            </div>

            <div className="info-block">
                <div className="profile-desc">

                </div>
            </div>

            <div className="input-group">
                <div className="input-block">

                </div>

                <div className="input-block">

                </div>
            </div>

        </>
    );
}

export default Profile;