const getFileFormat = (Type='docx') => {

    const imageSrc = Type == 'image' ? "/assets/images/svg/gallery.svg" : Type == 'video' ? "/assets/images/svg/video.svg" : Type == 'audio' ? "/assets/images/svg/audio.svg" : Type == 'document' ? '/assets/images/svg/document-text.svg' : Type == 'docx' ? '/assets/images/svg/document-text.svg' : '/assets/images/svg/document-text.svg'
    return imageSrc;
}

module.exports = {
    getFileFormat
}