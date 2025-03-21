import { GithubUser } from '../types/github';

interface ProfileProps {
  user: GithubUser;
}

const Profile = ({ user }: ProfileProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-header">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <div className="profile-info-wrapper">
            <div className="profile-name">
              <h2>{user.name || user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">@{user.login}</a>
            </div>
            <p className="join-date">Joined {formatDate(user.created_at)}</p>
          </div>
        </div>

        {user.bio && <p className="bio">{user.bio}</p>}

        <div className="profile-stats-wrapper">
          <div className="profile-stat">
            <h3>Repos</h3>
            <p>{user.public_repos}</p>
          </div>
          <div className="profile-stat">
            <h3>Followers</h3>
            <p>{user.followers}</p>
          </div>
          <div className="profile-stat">
            <h3>Following</h3>
            <p>{user.following}</p>
          </div>
        </div>

        <div className="profile-bottom-wrapper">
          <div className="profile-info">
            <img src="./assets/placeholder (1).png" alt="location" />
            <p>{user.location || 'Not Available'}</p>
          </div>
          <div className="profile-info">
            <img src="./assets/link.png" alt="website" />
            {user.blog ? (
              <a href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog}</a>
            ) : (
              <p>Not Available</p>
            )}
          </div>
          <div className="profile-info">
            <img src="./assets/twitter.png" alt="twitter" />
            {user.twitter_username ? (
              <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer">
                @{user.twitter_username}
              </a>
            ) : (
              <p>Not Available</p>
            )}
          </div>
          <div className="profile-info">
            <img src="./assets/business-and-trade.png" alt="company" />
            <p>{user.company || 'Not Available'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 