import noImage from '../assets/logo-game-hub.jpeg'

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;