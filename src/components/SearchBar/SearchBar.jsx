import style from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from "react";

export default function SearchBar({ onSubmit }) {
    const notify = () => toast(
        'Please, type some key word(-s), describing what pictures you want, in the input before submitting',
    {
    duration: 6000,
    icon: '❗',
    }
);
    const inputRef = useRef();
    
    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
        
    if (form.elements.topic.value.trim() === "") {
    return notify;
    }
    
    onSubmit(topic);
    form.reset();
    };

    return (
<header className={style.header}>
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            autocomplete="off"
            name='topic'
            autofocus
            placeholder="Search images and photos"
            ref={inputRef}
            required
        />
        <button type="submit">Search</button>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    </form>
</header>
)
}