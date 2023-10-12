function MainHead() {
    
    const author = 'Vedansh';
    const description = 'Yet Another Website using Typescript, React, Vite, Sass';
    const keywords = 'Website, Typescript, React, Vite, Sass, Framework';
    return (
    <>
        <meta name='author' content={author}/>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
    </>
  )
}

export default MainHead