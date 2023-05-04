import mgr, { Film } from '@/types/film';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function film() {

    const router = useRouter()
    const [filmItem, setFilmItem] = useState<Film>()

    useEffect(() => {
        const param = new URLSearchParams(router.asPath.split('?')[1]);
        let name = param.get('name')
        if (name === null) {
            return;
        }
        const findItem = mgr.films.find(f => f.id === Number(name))
        if (findItem !== undefined) {
            setFilmItem(findItem)
        }
    }, []);

    return (
        <div>
            {filmItem && <div>
                <video src={filmItem.videos.trailers[0].url}></video>
            </div>}
        </div>
    )
}