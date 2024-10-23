import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => (
    <div className={css.card}>
        <div className={css.top}>
            <img className={css.img}
                src={image}
                alt={`${name} avatar`}
            />
            <p className={css.name}>{name}</p>
            <p className={css.descri}>@{tag}</p>
            <p className={css.descri}>{location}</p>
        </div>

        <ul className={css.list}>
            <li className={css.item}>
                <span className={css.statsTitle}>Followers</span>
                <span className={css.stats}>{stats.followers}</span>
            </li>
            <li className={css.item}>
                <span className={css.statsTitle}>Views</span>
                <span className={css.stats}>{stats.views}</span>
            </li>
            <li className={css.item}>
                <span className={css.statsTitle}>Likes</span>
                <span className={css.stats}>{stats.likes}</span>
            </li>
        </ul>
    </div>

);

export default Profile;