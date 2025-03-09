import style from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard.jsx'

export default function ImageGallery({gallery, items:{ link, name, likes, author } }) {
    <ul className={style.gallery}>
    {gallery.map((galleries) => {
        return (
            <li key={galleries.id}>
                <ImageCard link={link} name={name} likes={likes} author={author}/>
            </li>
        )
    })}
</ul>
}