import '../styles/Home.scss';

function Code<Type>(text: Type, isClosing: boolean = false): Type{
  return !isClosing? (`&lt; ${text} &gt;`) as Type: (`&lt; ${text} /&gt;`) as Type;
}

function Home() {
  return (
    <>
    <div className='text subheading'>
      Nuclear Tech, Atomic Innovation
    </div>
    <div className='explain'>
      <div className='box _code'>
        &lt; Code &gt;<br />Crafting digital poetry with logic and language of your choice.
      </div>
      <div className='box _test'>
        &lt; Test &gt; <br/>The important detective work that ensures your creation is flawless.
      </div>
      <div className='box _deploy'>
        &lt; Deploy &gt; <br/>
        Releasing your digital masterpiece into the world, like setting a ship to sail on a new adventure.
      </div>
    </div>
    </>
  )
}

export default Home;