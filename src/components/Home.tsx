import '../styles/Home.scss';

function Code(props: string, isClosing: boolean = false) {
  if (isClosing) return <div className='closing'>&lt; {props} /&gt;</div>
  else return <div className='opening'>&lt; {props} &gt;</div>
}

function Home() {
  return (
    <>

    <div className='text subheading'>
      Nuclear Tech, Atomic Innovation 
    </div>
    <div className='explain'>
      <div className='box _code'>
        {Code('Code')}<br />
          Crafting digital poetry with logic and language of your choice. Best in class is Typescript.
        {Code('Code', true)}
      </div>
      <div className='box _test'>
        {Code('Test')}<br/>
          The important detective work that ensures your creation is flawless. Works perfectly fine.
        {Code('Test', true)}
      </div>
      <div className='box _deploy'>
        {Code('Deploy')} <br/>
          Releasing your digital masterpiece into the world, like a ship to sail on a new adventure. 
        {Code('Deploy', true)}
      </div>
    </div>
    </>
  )
}

export default Home;