import TopHeader from '../components/TopHeader';

function AccountPage() {
  return (
    <section className="page page--account fade-in">
      <TopHeader title="Account Settings" />

      <article className="profile-card">
        <div className="profile-top">
          <div className="avatar-wrap">
            <img src="/avatar.png" alt="Marry Doe" className="avatar-image" />
            <button className="avatar-edit" type="button" aria-label="Edit profile image">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 5L10 3H14L16 5H19C20.1 5 21 5.9 21 7V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V7C3 5.9 3.9 5 5 5H8ZM12 17C14.8 17 17 14.8 17 12C17 9.2 14.8 7 12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17ZM12 15.5C10 15.5 8.5 14 8.5 12C8.5 10 10 8.5 12 8.5C14 8.5 15.5 10 15.5 12C15.5 14 14 15.5 12 15.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div className="profile-info">
            <h2>Marry Doe</h2>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
          Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </article>
    </section>
  );
}

export default AccountPage;
