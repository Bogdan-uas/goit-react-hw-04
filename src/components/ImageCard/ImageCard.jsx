import style from './ImageCard.module.css'

export default function ImageCard({ link, name, likes, author }) {
    return (
        <div>
        <img src={link} alt={name} className={style.img} />
        <p>Author: {author}</p>
        <p>Likes: {likes}</p>
        </div>
    )
}